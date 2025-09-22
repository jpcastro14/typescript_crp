import {
  Container,
  HeaderInfo,
  EventTitle,
  InputField,
  SectorInput,
  InputContainer,
  CriticSelect,
  AreaInput,
  PrioritySelect,
  DescriptionField,
  BodyInfo,
  EventCategory,
  EventType,
  TitleInput,
  ErrorP,
  TypeInput,
  DescriptionArea,
} from "./styles";
import { useEffect, useState } from "react";
import headset from "../assets/headset.svg";
import AlertMessage from "../Messages/AlertMessage";
import { useForm } from "react-hook-form";
import TopTitle from "../TopInfo";
import { mainIssue, messageProps } from "./types";
import axios from "axios";
import { ISector } from "./types";
import { baseURL, sectorURL } from "../../services/api";

function IssueForm() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<mainIssue>();
  const [open] = useState<boolean>(true);
  const [messageConfig, setMessageConfig] = useState<messageProps>({
    trigger: false,
    alertText: "",
    variant: "",
  });

  const [sectorData, setSectorData] = useState<ISector[]>([]);

  useEffect(() => {
    const fetchsector = async () => {
      axios
        .get(sectorURL)
        .then((response) => setSectorData(response.data))
        .catch((err) => console.log(err));
    };
    fetchsector();
  }, []);

  function handlePost(data: mainIssue | undefined): void {
    console.log(data);
    axios
      .post(`${baseURL}tickets`, data)
      .then((response) => {
        response.status == 201
          ? setMessageConfig({
              trigger: true,
              alertText: "Chamado criado com sucesso",
              variant: "success",
            })
          : setMessageConfig({
              trigger: true,
              alertText: "Ocorreu um erro em sua solicitação",
              variant: "danger",
            });
        reset({
          title: "",
          type: "",
          sector: "",
          area: "",
          criticality: undefined,
          description: "",
          priority: undefined,
        });
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <TopTitle title="Tellarus Support" type="forms" />
      <AlertMessage
        variant={messageConfig.variant}
        alertText={messageConfig.alertText}
        trigger={messageConfig.trigger}
        onClose={() => setMessageConfig({ trigger: false })}
      />

      <Container>
        <HeaderInfo>
          <EventCategory $levelcolor={"var(--secondary-gray)"} />
          <EventType>
            <img src={headset} />
          </EventType>
          <EventTitle>
            <span>Abertura de chamado</span>
          </EventTitle>
        </HeaderInfo>
        <BodyInfo open={open}>
          {/* ------------------------------------------------------------------------------------------------------ */}

          <InputField>
            <InputContainer>
              <label>Título da ocorrência</label>
              <TitleInput
                {...register("title", { required: true, maxLength: 30 })}
              />
              {errors?.title?.type === "required" && (
                <ErrorP>Este campo deve ser preenchido</ErrorP>
              )}
              {errors?.title?.type === "maxLength" && (
                <ErrorP>
                  Este campo não pode possuir mais do que 30 caracteres
                </ErrorP>
              )}
            </InputContainer>
            <InputContainer>
              <label>Tipo de chamado</label>
              <TypeInput
                {...register("type", {
                  required: true,
                })}
              >
                <option></option>
                <option value="requisicao">Requisição</option>
                <option value="ocorrencia">Ocorrência</option>
              </TypeInput>
              {errors?.type?.type === "required" && (
                <ErrorP>Este campo deve ser preenchido</ErrorP>
              )}
              {errors?.type?.type === "validate" && (
                <ErrorP>Você não pode selecionar esse campo</ErrorP>
              )}
            </InputContainer>
          </InputField>
          {/* ------------------------------------------------------------------------------------------------------ */}
          {/* Div que organiza os inputs exceto tipo e título*/}
          {/* ------------------Setor----------------------*/}
          <InputField>
            <InputContainer>
              <label>Setor</label>
              <SectorInput {...register("sector", { required: true })}>
                <option>...</option>
                {sectorData.map((sector) => (
                  <option key={sector.code} value={sector.name}>
                    {sector.name}
                  </option>
                ))}
              </SectorInput>
              {errors?.sector?.type === "required" && (
                <ErrorP>Este campo deve ser preenchido</ErrorP>
              )}
            </InputContainer>
            {/* ------------------Area--------------------------*/}

            <InputContainer>
              <label>Criticalidade</label>
              <CriticSelect {...register("criticality", { required: true })}>
                <option></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </CriticSelect>
              {errors?.criticality?.type === "required" && (
                <ErrorP>Um número deve ser selecionado</ErrorP>
              )}
            </InputContainer>
          </InputField>
          {/* ------------------Criticalidade------------------ */}
          <InputField>
            <InputContainer>
              <label>Area Afetada</label>
              <AreaInput {...register("area", { required: true })} />
              {errors?.area?.type === "required" && (
                <ErrorP>Este campo deve ser preenchido</ErrorP>
              )}
            </InputContainer>

            {/* ------------------Prioridade--------------------- */}
            <InputContainer>
              <label>Prioridade</label>
              <PrioritySelect {...register("priority", { required: true })}>
                <option></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </PrioritySelect>
              {errors?.priority?.type === "required" && (
                <ErrorP>Um número deve ser selecionado</ErrorP>
              )}
            </InputContainer>
          </InputField>
          <DescriptionArea>
            <InputContainer>
              <label>Descrição da ocorrência</label>
              <DescriptionField
                {...register("description", { required: true })}
              />
            </InputContainer>
          </DescriptionArea>

          {errors?.description?.type === "required" && (
            <ErrorP>O chamado precisa conter uma descrição</ErrorP>
          )}
        </BodyInfo>
        <button onClick={() => handleSubmit(handlePost)()}>
          Criar chamado
        </button>
      </Container>
    </>
  );
}

export default IssueForm;
