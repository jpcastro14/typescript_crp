//import { Container } from "./styles";
import {
  Container,
  HeaderInfo,
  EventTitle,
  EventAction,
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
import { ReactNode, useReducer, useState } from "react";
import headset from "../assets/headset.svg";
import expand from "../assets/expand.svg";
import editevent from "../assets/pen.svg";
import AlertMessage from "../Messages/AlertMessage";




type mainIssue = {
  id?: number;
  eventTitle?: string;
  eventSector?: string;
  eventArea?: string;
  eventCriticality?: {
    criticality?: string;
    criticalityColor?: string;
  };
  eventPriority?: number;
  eventDescription?: string;
  eventMoment?: string | ReactNode;
  eventTime?: Date | undefined;
};

type messageProps = {
  alertText?: string;
  trigger?: boolean;
}

type Action = { type: "test"; text: string } | { type: "deploy" };

const initialState = {};

function reducer(state: mainIssue, action: Action) {
  switch (action.type) {
    case "test":
      console.log(state);
      return {
        ...state,
        eventTitle: action.text,
        eventSector: action.text,
        eventArea: action.text,
        eventCriticality: {
          criticality: action.text,
          criticalityColor: "var(--primary-blue)",
        },
        eventPriority: 1,
        eventDescription: action.text,
      };

    default:
      return state;
  }
}


function IssueForm() {
  const [state] = useReducer(reducer, initialState);
  const [open, setOpen] = useState<boolean>(true);
  const [fixedState, setFixedState] = useState<mainIssue | undefined>(undefined);
  const [info, setInfo] = useState<messageProps>({ trigger: false, alertText: "" })


  /* function testTask() {
    dispatch({ type: "test", text: "Olá Marilene" });
  } */

  function handleType(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setFixedState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    const { name, selectedIndex } = e.target;

    switch (selectedIndex) {
      case 1:
        setFixedState((prevState) => ({
          ...prevState,
          [name]: selectedIndex,
          eventCriticality: {
            criticalityColor: "var(--primary-blue)"
          }
        }))
        setInfo({ trigger: true, alertText: "Evento com prioridade 1" })
        break
      case 2:
        setFixedState((prevState) => ({
          ...prevState,
          [name]: selectedIndex,
          eventCriticality: {
            criticalityColor: 'var(--primary-yellow)',
          }
        }))
        break
      case 3:
        setFixedState((prevState) => ({
          ...prevState,
          [name]: selectedIndex,
          eventCriticality: {
            criticalityColor: 'var(--primary-red)'
          }
        }))
        break
      default:
        break;
    }
  }


  function handlePost() {
    const dateString = Intl.DateTimeFormat('pt-br', {
      dateStyle: 'full',
      timeStyle: 'short',
    }).format(new Date())

    setFixedState((prevState) => ({
      ...prevState,
      id: Math.floor((Math.random() * 10)),
      eventMoment: dateString,
      eventTime: new Date()
    }));
    console.log(fixedState, fixedState?.eventTime?.getDay());
  }

  function testDate() {

    const date = new Date();

    console.log(Intl.DateTimeFormat('pt-br', {
      dateStyle: 'full',
      timeStyle: 'long',
    }).format(date))
  }


  return (
    <Container>
      <AlertMessage alertText={info.alertText} trigger={info.trigger} />
      <HeaderInfo>
        <EventCategory
          $levelcolor={
            fixedState?.eventCriticality?.criticalityColor ? fixedState?.eventCriticality.criticalityColor : "var(--secondary-gray)"
          }
        />
        <EventType>
          <img src={headset} />
        </EventType>
        <EventTitle>
          <span>{fixedState?.eventTitle}</span>
          <p onClick={testDate}>Ocorrido:<strong>  {fixedState?.eventMoment}</strong></p>
        </EventTitle>
        <EventAction>
          <button onClick={() => setOpen(!open)}>
            <img src={expand} />
          </button>
          <button>
            <img src={editevent} />
          </button>
        </EventAction>
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
              value={fixedState?.eventCriticality?.criticality}
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
            >
              <option>...</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </PrioritySelect>
          </PointerContainer>
        </PointerField>
        <DescriptionField
          name="eventPiority"
          onChange={handleType}
          defaultValue={fixedState?.eventDescription}
          placeholder="Descrição do evento" />
      </BodyInfo>
      <button onClick={handlePost}>Teste</button>
    </Container>
  );
}

export default IssueForm;
