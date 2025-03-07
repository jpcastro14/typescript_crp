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
  TypeInput
} from "./styles";
import { useState } from "react";
import headset from "../assets/headset.svg";
import AlertMessage from "../Messages/AlertMessage";
import { useForm } from "react-hook-form";
import TopTitle from "../TopInfo";
import { mainIssue, messageProps } from "./types";


function IssueForm() {
  const { register, reset, handleSubmit, formState: { errors } } = useForm();
  const [open] = useState<boolean>(true);
  const [messageConfig, setMessageConfig] = useState<messageProps>({ trigger: false, alertText: "", variant: "" })


  function handlePost(data: mainIssue) {

    fetch('http://172.16.239.177:8000/api/v1/chamados/', {
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
      <TopTitle title="Tellarus Support" type="forms" />
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

{/* ------------------------------------------------------------------------------------------------------ */}

          <InputField>
          <InputContainer>
              <label>Título da ocorrência</label>
              <TitleInput
                {...register("eventTitle", {
                  required: true
                })}
              />
              {errors?.eventTitle?.type === 'required' && (
                <ErrorP>Este campo deve ser preenchido</ErrorP>
              )}
            </InputContainer>
            <InputContainer>
              <label>Tipo de chamado</label>
              <TypeInput
                {...register("eventType", {
                  required: true
                })}
              >
                <option></option>
                <option value='requisicao'>Requisição</option>
                <option value='ocorrencia'>Ocorrência</option>
              </TypeInput>
              {errors?.eventType?.type === 'required' && (
                <ErrorP>Este campo deve ser preenchido</ErrorP>
              )}
              {errors?.eventType?.type === 'validate' && (
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
              <SectorInput
                {...register("eventSector", { required: true })}
              />
              {errors?.eventSector?.type === 'required' && (
                <ErrorP>Este campo deve ser preenchido</ErrorP>
              )}
              </InputContainer>
            {/* ------------------Area--------------------------*/}
              
              <InputContainer>
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
            </InputContainer>
              </InputField>
            {/* ------------------Criticalidade------------------ */}
            <InputField>
            <InputContainer>
            
              <label>Area Afetada</label>
              <AreaInput
                {...register("eventArea", { required: true })}
                />
              {errors?.eventArea?.type === 'required' && (
                <ErrorP>Este campo deve ser preenchido</ErrorP>
              )}
              </InputContainer>
            
            {/* ------------------Prioridade--------------------- */}
            <InputContainer>
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
            </InputContainer>
            </InputField>
          
          <DescriptionField
            {...register("eventDescription", { required: true })}
          />
          {errors?.eventDescription?.type === 'required' && (
            <ErrorP>O chamado precisa conter uma descrição</ErrorP>
          )}
        </BodyInfo>
        <button onClick={() => handleSubmit(handlePost)()} >Criar chamado</button>
      </Container>
      
    </>
  );
}

export default IssueForm;