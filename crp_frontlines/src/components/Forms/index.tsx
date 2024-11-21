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
} from "./styles";
import { useState } from "react";
import headset from "../assets/headset.svg";
import expand from "../assets/expand.svg";
import editevent from "../assets/pen.svg";

function IssueForm() {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <Container>
      <HeaderInfo>
        <EventCategory $levelcolor="var(--primary-blue)" />
        <EventType>
          <img src={headset} />
        </EventType>
        <EventTitle>
          <span>Criar Ocorrência</span>
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
          {/* Div que organiza os botões indicadores */}
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
            <PrioritySelect $levelcolor={"white"}>Prioridade</PrioritySelect>
          </PointerContainer>
        </PointerField>
        <DescriptionField defaultValue={"descrição"} />
      </BodyInfo>
    </Container>
  );
}

export default IssueForm;
