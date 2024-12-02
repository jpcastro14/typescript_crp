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
import { useReducer, useState } from "react";
import headset from "../assets/headset.svg";
import expand from "../assets/expand.svg";
import editevent from "../assets/pen.svg";
import moment from "moment";

type mainIssue = {
  id?: number;
  eventTitle?: string;
  eventSector?: string;
  eventArea?: string;
  eventCriticality?: {
    criticality?: string;
    criticalityColor?: string;
  };
  eventPriority?: string;
  eventDescription?: string;
  eventMoment?:Date | number;
};

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
        eventPriority: action.text,
        eventDescription: action.text,
      };

    default:
      return state;
  }
}

function IssueForm() {
  const [state] = useReducer(reducer, initialState);
  const [open, setOpen] = useState<boolean>(true);
  const [fixedState, setFixedState] = useState<mainIssue | undefined >(undefined);

  /* function testTask() {
    dispatch({ type: "test", text: "Olá Marilene" });
  } */

  function handleType(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement >) {
    const { name, value } = e.target;

    setFixedState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handlePost() {

    setFixedState((prevState) => ({
      ...prevState,
      id: Math.floor((Math.random() * 10)),
      eventMoment:new Date().getUTCDate()
    }));
    console.log(fixedState);
  }



  return (
    <Container>
      <HeaderInfo>
        <EventCategory
          $levelcolor={
            state.eventCriticality?.criticalityColor
              ? state.eventCriticality?.criticalityColor
              : "var(--primary-green)"
          }
        />
        <EventType>
          <img src={headset} />
        </EventType>
        <EventTitle>
          <span>{fixedState?.eventTitle}</span>
          <p>Ocorrido:</p>
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
            onChange={handleType}
            >
              <option>...</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>5</option>
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
              <option>4</option>
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
