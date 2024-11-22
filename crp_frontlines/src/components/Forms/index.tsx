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
import { useState } from "react";
import headset from "../assets/headset.svg";
import expand from "../assets/expand.svg";
import editevent from "../assets/pen.svg";

type mainIssue = {
  id?: number;
  eventTitle: string;
  eventSector: string;
  eventArea: string;
  eventCriticality: {
    criticality: string;
    criticalityColor: string;
  };
  eventPriority: string;
  eventDescription: string;
};

function IssueForm() {
  const [open, setOpen] = useState<boolean>(true);
  const [fixedState, setFixedState] = useState<mainIssue>();

  return (
    <Container>
      <HeaderInfo>
        <EventCategory $levelcolor="var(--primary-green)" />
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
    </Container>
  );
}

export default IssueForm;
