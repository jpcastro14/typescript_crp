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
  const [open] = useState<boolean>(true);
  const [fixedState, setFixedState] = useState<mainIssue | undefined>(undefined);
  const [messageConfig, setMessageConfig] = useState<messageProps>({ trigger: false, alertText: "", variant: "" })

  function handleType(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setFixedState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
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
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

      })
      .catch((err) => console.log(err)
      )
  }

  function handleSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    const { name, selectedIndex } = e.target;

    switch (selectedIndex) {
      case 1:
        setFixedState((prevState) => ({
          ...prevState,
          [name]: selectedIndex,
          eventCriticality: selectedIndex,
          eventCriticalityColor: "var(--primary-blue)",
        }))
        setMessageConfig({ trigger: true, alertText: `Chamado com criticalidade ${selectedIndex}`, variant: "primary" })
        break
      case 2:
        setFixedState((prevState) => ({
          ...prevState,
          [name]: selectedIndex,
          eventCriticality: selectedIndex,
          eventCriticalityColor: 'var(--primary-yellow)',
        }))
        setMessageConfig({ trigger: true, alertText: `Chamado com criticalidade ${selectedIndex}`, variant: "warning" })
        break
      case 3:
        setFixedState((prevState) => ({
          ...prevState,
          [name]: selectedIndex,
          eventCriticality: selectedIndex,
          eventCriticalityColor: 'var(--primary-red)'
        }))
        setMessageConfig({ trigger: true, alertText: `Chamado com criticalidade ${selectedIndex}`, variant: "danger" })
        break
      default:
        break;
    }
  }

  function handlePriority(e: React.ChangeEvent<HTMLSelectElement>) {
    const { selectedIndex } = e.target;

    switch (selectedIndex) {
      case 1:
        setFixedState((prevState) => ({
          ...prevState,
          eventPriority: selectedIndex
        }))
        setMessageConfig({ trigger: true, alertText: `Chamado com prioridade ${selectedIndex}`, variant: 'primary' })
        break;
      case 2:
        setFixedState((prevState) => ({
          ...prevState,
          eventPriority: selectedIndex
        }))
        setMessageConfig({ trigger: true, alertText: `Chamado com prioridade ${selectedIndex}`, variant: 'warning' })
        break;
      case 3:
        setFixedState((prevState) => ({
          ...prevState,
          eventPriority: selectedIndex
        }))
        setMessageConfig({ trigger: true, alertText: `Chamado com prioridade >${selectedIndex}<, deve ser encaminhado imediatamente para o setor responsável!`, variant: 'danger' })
    }

  }

  function sampleDate() {
    const date = new Date();
    console.log(Intl.DateTimeFormat('pt-br', {
      dateStyle: 'full',
      timeStyle: 'long',
    }).format(date))
  }

  return (
    <>
      <AlertMessage variant={messageConfig.variant} alertText={messageConfig.alertText} trigger={messageConfig.trigger} onClose={() => setMessageConfig({ trigger: false })} />
      <Container>
        <HeaderInfo>
          <EventCategory
            $levelcolor={
              fixedState?.eventCriticalityColor ? fixedState?.eventCriticalityColor : "var(--secondary-gray)"
            }
          />
          <EventType>
            <p></p>
            <img src={headset} />
          </EventType>
          <EventTitle>
            <span>{fixedState?.eventTitle}</span>
            <p onClick={sampleDate}>Ocorrido:<strong>{fixedState?.eventMoment}</strong></p>
          </EventTitle>
        </HeaderInfo>
        <BodyInfo open={open}>
          <PointerField>
            <PointerContainer>
              <label>Título da ocorrência</label>
              <TitleInput
                onChange={handleType}
                name="eventTitle"
                defaultValue={fixedState?.eventTitle}
              />
            </PointerContainer>
          </PointerField>

          <PointerField>
            {/* Div que organiza os inputs */}
            {/* ------------------Setor----------------------*/}
            <PointerContainer>
              <label>Setor</label>
              <SectorInput
                onChange={handleType}
                name="eventSector"
                defaultValue={fixedState?.eventSector}
              />
            </PointerContainer>
            {/* ------------------Area--------------------------*/}
            <PointerContainer>
              <label>Area Afetada</label>
              <AreaInput
                onChange={handleType}
                name="eventArea"
                defaultValue={fixedState?.eventArea}
              />
            </PointerContainer>
            {/* ------------------Criticality------------------ */}
            <PointerContainer>
              <label>Criticalidade</label>
              <CriticSelect
                name='eventCriticality'
                defaultValue={'...'}
                value={fixedState?.eventCriticality}
                onChange={handleSelect}
              >
                <option>...</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </CriticSelect>
            </PointerContainer>
            {/* ------------------Priority--------------------- */}
            <PointerContainer>
              <label>Prioridade</label>
              <PrioritySelect
                name="eventPriority"
                defaultValue={'...'}
                value={fixedState?.eventPriority}
                onChange={handlePriority}
              >
                <option>...</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </PrioritySelect>
            </PointerContainer>
          </PointerField>
          <DescriptionField
            name="eventDescription"
            onChange={handleType}
            defaultValue={fixedState?.eventDescription}
            placeholder="Descrição do evento" />
        </BodyInfo>
        <button onClick={handlePost} >Teste</button>
      </Container>
    </>
  );
}

export default IssueForm;
