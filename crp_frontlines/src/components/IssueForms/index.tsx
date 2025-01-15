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
} from "./styles";
import { ReactNode, useState } from "react";
import headset from "../assets/headset.svg";
import AlertMessage from "../Messages/AlertMessage";
import { useForm } from "react-hook-form";

type mainIssue = {
  id?: number;
  eventTitle?: string;
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
  const { register, handleSubmit } = useForm();
  const [open] = useState<boolean>(true);
  const [fixedState, setFixedState] = useState<mainIssue | undefined>(undefined);
  const [messageConfig, setMessageConfig] = useState<messageProps>({ trigger: false, alertText: "", variant: "" })


  const onSubmit = (data: mainIssue) => {
    console.log(data);
  }

  function handlePost() {
    console.log(fixedState);

    fetch('http://172.16.239.44:8000/api/v1/chamados/', {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(fixedState)
    })
      .then((response) => {
        response.ok ?
          setMessageConfig({ trigger: true, alertText: 'Chamado criado com sucesso', variant: 'success' }) :
          setMessageConfig({ trigger: true, alertText: 'Ocorreu um erro em sua solicitação', variant: 'danger' })
      })
      .then((data) => {
        console.log(data);
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
                {...register("eventTitle")}
              />
            </PointerContainer>
          </PointerField>

          <PointerField>
            {/* Div que organiza os inputs */}
            {/* ------------------Setor----------------------*/}
            <PointerContainer>
              <label>Setor</label>
              <SectorInput
                {...register("eventSector")}
              />
            </PointerContainer>
            {/* ------------------Area--------------------------*/}
            <PointerContainer>
              <label>Area Afetada</label>
              <AreaInput
                {...register("eventArea")}
              />
            </PointerContainer>
            {/* ------------------Criticality------------------ */}
            <PointerContainer>
              <label>Criticalidade</label>
              <CriticSelect
                {...register("eventCriticality")}
              >
                <option>...</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
              </CriticSelect>
            </PointerContainer>
            {/* ------------------Prioridade--------------------- */}
            <PointerContainer>
              <label>Prioridade</label>
              <PrioritySelect
                {...register("eventPriority")}
              >
                <option>...</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
              </PrioritySelect>
            </PointerContainer>
          </PointerField>
          <DescriptionField
            {...register("eventDescription")}
          />
        </BodyInfo>
        <button onClick={() => handleSubmit(onSubmit)()} >Teste</button>
      </Container>
    </>
  );
}

export default IssueForm;
