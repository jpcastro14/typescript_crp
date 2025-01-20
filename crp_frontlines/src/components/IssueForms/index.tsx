import {
  Container,
  HeaderInfo,
  EventTitle,
  PointerField,
  SectorInput,
  PointerContainer,
  CriticSelect,
  AreaInput,
  PrioritySelect,
  DescriptionField,
  BodyInfo,
  EventCategory,
  EventType,
  TitleInput,
  ErrorP,
  TypeInput
} from "./styles";
import { ReactNode, useState } from "react";
import headset from "../assets/headset.svg";
import AlertMessage from "../Messages/AlertMessage";
import { useForm } from "react-hook-form";

type mainIssue = {
  id?: number;
  eventTitle?: string;
  eventType?: string;
  eventSector?: string;
  eventArea?: string;
  eventCriticality?: number | string;
  eventCriticalityColor?: string;
  eventPriority?: number;
  eventDescription?: string;
  eventMoment?: string | ReactNode;
  eventTime?: Date | undefined;
};

type messageProps = {
  trigger: boolean;
  alertText?: string;
  variant?: string;
}

function IssueForm() {
  const { register, reset, handleSubmit, formState: { errors } } = useForm();
  const [open] = useState<boolean>(true);
  const [fixedState, setFixedState] = useState<mainIssue | undefined>(undefined);
  const [messageConfig, setMessageConfig] = useState<messageProps>({ trigger: false, alertText: "", variant: "" })


  /*   const onSubmit = (data: mainIssue) => {
      console.log(data);
    } */

  function handlePost(data: mainIssue) {

    fetch('http://172.16.239.44:8000/api/v1/chamados/', {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data)
    })
      .then((response) => {
        response.ok ?
          setMessageConfig({ trigger: true, alertText: 'Chamado criado com sucesso', variant: 'success' }) :
          setMessageConfig({ trigger: true, alertText: 'Ocorreu um erro em sua solicitação', variant: 'danger' })
        reset({ eventTitle: '', EventCategory: '', eventType: '', eventSector: '', eventArea: '', eventCriticality: '', eventDescription: '', eventPriority: '' })
      })
      .catch((err) => console.log(err)
      )

  }

  return (
    <>
      <AlertMessage variant={messageConfig.variant} alertText={messageConfig.alertText} trigger={messageConfig.trigger} onClose={() => setMessageConfig({ trigger: false })} />
      <Container>
        <HeaderInfo>
          <EventCategory
            $levelcolor={"var(--secondary-gray)"}
          />
          <EventType>
            <img src={headset} />
          </EventType>
          <EventTitle>
            <span>Abertura de chamado</span>
          </EventTitle>
        </HeaderInfo>
        <BodyInfo open={open}>
          <PointerField>
            <PointerContainer>
              <label>Título da ocorrência</label>
              <TitleInput
                {...register("eventTitle", { required: true, minLength: 5 })}
              />
              {errors?.eventTitle?.type === 'required' && (
                <ErrorP>Este campo deve ser preenchido</ErrorP>
              )}
            </PointerContainer>
            <PointerContainer>
              <label>Tipo de chamado</label>
              <TypeInput
                {...register("eventType", { required: true })}
              >
                <option></option>
                <option value='requisicao'>Requisição</option>
                <option value='ocorrencia'>Ocorrência</option>
              </TypeInput>
              {errors?.eventTitle?.type === 'required' && (
                <ErrorP>Este campo deve ser preenchido</ErrorP>
              )}
            </PointerContainer>
          </PointerField>
          <PointerField>
            {/* Div que organiza os inputs */}
            {/* ------------------Setor----------------------*/}
            <PointerContainer>
              <label>Setor</label>
              <SectorInput
                {...register("eventSector", { required: true })}
              />
              {errors?.eventSector?.type === 'required' && (
                <ErrorP>Este campo deve ser preenchido</ErrorP>
              )}
            </PointerContainer>
            {/* ------------------Area--------------------------*/}
            <PointerContainer>
              <label>Area Afetada</label>
              <AreaInput
                {...register("eventArea", { required: true })}
              />
              {errors?.eventArea?.type === 'required' && (
                <ErrorP>Este campo deve ser preenchido</ErrorP>
              )}
            </PointerContainer>
            {/* ------------------Criticalidade------------------ */}
            <PointerContainer>
              <label>Criticalidade</label>
              <CriticSelect
                {...register("eventCriticality", { required: true })}
              >
                <option></option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
              </CriticSelect>
              {errors?.eventCriticality?.type === 'required' && (
                <ErrorP>Um número deve ser selecionado</ErrorP>
              )}
            </PointerContainer>
            {/* ------------------Prioridade--------------------- */}
            <PointerContainer>
              <label>Prioridade</label>
              <PrioritySelect
                {...register("eventPriority", { required: true })}
              >
                <option></option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
              </PrioritySelect>
              {errors?.eventPriority?.type === 'required' && (
                <ErrorP>Um número deve ser selecionado</ErrorP>
              )}
            </PointerContainer>
          </PointerField>
          <DescriptionField
            {...register("eventDescription", { required: true })}
          />
          {errors?.eventDescription?.type === 'required' && (
            <ErrorP>Este campo deve ser preenchido</ErrorP>
          )}
        </BodyInfo>
        <button onClick={() => handleSubmit(handlePost)()} >Teste</button>
      </Container>
    </>
  );
}

export default IssueForm;
