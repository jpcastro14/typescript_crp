import { useState } from "react";
import {
  Container,
  HeaderInfo,
  EventTitle,
  EventAction,
  PointerField,
  SectorButton,
  PointerContainer,
  CriticButton,
  AreaButton,
  PriorityButton,
  DescriptionField,
  BodyInfo,
} from "./styles";

import expand from "../assets/expand.svg";

function EventDash() {
  const [open, setOpen] = useState(false);

  function toggleState() {
    setOpen(!open);
  }

  return (
    <>
      <Container>
        <HeaderInfo>
          <span className="EventCategory"></span>
          <div className="EventType"></div>
          <EventTitle>
            <span>Queda Servidor LDAP</span>
            <p>Ocorrido: Segunda Feira, 30 de setembro as 19:51</p>
          </EventTitle>
          <EventAction>
            <button></button>
            <button onClick={toggleState}>
              <img src={expand} />
            </button>
            <button>c</button>
          </EventAction>
        </HeaderInfo>
        <BodyInfo open={open}>
          <PointerField>
            {/* Div que organiza os botões indicadores */}
            {/* ------------------Setor----------------------Ele [e teu p--*/}
            <PointerContainer>
              <label>Setor</label>
              <SectorButton>SEARP - TELARUS</SectorButton>
            </PointerContainer>
            {/* ------------------Area--------------------------*/}
            <PointerContainer>
              <label>Area Afetada</label>
              <AreaButton>Infraestrutura</AreaButton>
            </PointerContainer>
            {/* ------------------Criticality------------------ */}
            <PointerContainer>
              <label>Criticalidade</label>
              <CriticButton levelColor={"#157145"}>Baixa</CriticButton>
            </PointerContainer>
            {/* ------------------Priority--------------------- */}
            <PointerContainer>
              <label>Prioridade</label>
              <PriorityButton levelColor={"#fed766"}>Média</PriorityButton>
            </PointerContainer>
          </PointerField>
          <DescriptionField>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to
            generate Lorem Ipsum which looks reasonable. The generated Lorem
            Ipsum is therefore always free from repetition, injected humour, or
            non-characteristic words etc.
          </DescriptionField>
        </BodyInfo>
      </Container>
    </>
  );
}

export default EventDash;
