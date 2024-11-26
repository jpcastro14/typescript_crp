//import { Container } from "./styles";
import {
  Container,
  HeaderInfo,
  EventTitle,
  EventAction,
  PointerField,
  SectorInput,
  PointerContainer,
  CriticInput,
  AreaInput,
  PrioritySelect,
  DescriptionField,
  BodyInfo,
  EventCategory,
  EventType,
  TitleInput,
} from "./styles";
import { useEffect, useReducer, useState } from "react";
import headset from "../assets/headset.svg";
import expand from "../assets/expand.svg";
import editevent from "../assets/pen.svg";

IssueForm
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
  const [state, dispatch] = useReducer(reducer, initialState);

  const [open, setOpen] = useState<boolean>(true);
  const [fixedState, setFixedState] = useState<mainIssue>();

  function testTask() {
    dispatch({ type: "test", text: "Olá Marilene" });
  }

  return (
    <Container>
      <HeaderInfo>
        <EventCategory
          $levelcolor={
            state.eventCriticality?.criticalityColor
              ? state.eventCriticality?.criticalityColor
              : "var(--primary-black)"
          }
        />
        <EventType>
          <img src={headset} />
        </EventType>
        <EventTitle>
          <span>{fixedState?.eventTitle}</span>
          <p>Ocorrido:</p>
          <button onClick={testTask}>Teste</button>
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
            <TitleInput />
          </PointerContainer>
        </PointerField>

        <PointerField>
          {/* Div que organiza os inputs */}
          {/* ------------------Setor----------------------*/}
          <PointerContainer>
            <label>Setor</label>
            <SectorInput />
          </PointerContainer>
          {/* ------------------Area--------------------------*/}
          <PointerContainer>
            <label>Area Afetada</label>
            <AreaInput />
          </PointerContainer>
          {/* ------------------Criticality------------------ */}
          <PointerContainer>
            <label>Criticalidade</label>
            <CriticInput />
          </PointerContainer>
          {/* ------------------Priority--------------------- */}
          <PointerContainer>
            <label>Prioridade</label>
            <PrioritySelect />
          </PointerContainer>
        </PointerField>
        <DescriptionField defaultValue={"descrição"} />
      </BodyInfo>
=======
function IssueForm() {
  return (
    <Container>
      <Input type="text" placeholder="Escreva aqui" />
      <Input type="number" placeholder="Teste placeholder" />
    </Container>
  );
}

export default IssueForm;
