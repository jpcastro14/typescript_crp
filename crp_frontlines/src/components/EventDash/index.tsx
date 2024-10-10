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
  EventCategory,
} from "./styles";
import expand from "../assets/expand.svg";

type EventDashProps = {
  data: {
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
};

function EventDash({ data }: EventDashProps) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Container>
        <HeaderInfo>
          <EventCategory levelColor={data.eventCriticality?.criticalityColor} />
          <div className="EventType"></div>
          <EventTitle>
            <span>{data.eventTitle}</span>
            <p>Ocorrido: Segunda Feira, 30 de setembro as 19:51</p>
          </EventTitle>
          <EventAction>
            <button></button>
            <button onClick={() => setOpen(!open)}>
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
              <SectorButton>{data.eventSector}</SectorButton>
            </PointerContainer>
            {/* ------------------Area--------------------------*/}
            <PointerContainer>
              <label>Area Afetada</label>
              <AreaButton>{data.eventArea}</AreaButton>
            </PointerContainer>
            {/* ------------------Criticality------------------ */}
            <PointerContainer>
              <label>Criticalidade</label>
              <CriticButton
                levelColor={data.eventCriticality?.criticalityColor}
              >
                {data.eventCriticality?.criticality}
              </CriticButton>
            </PointerContainer>
            {/* ------------------Priority--------------------- */}
            <PointerContainer>
              <label>Prioridade</label>
              <PriorityButton
                levelColor={data.eventCriticality?.criticalityColor}
              >
                {data.eventPriority}
              </PriorityButton>
            </PointerContainer>
          </PointerField>
          <DescriptionField>{data.eventDescription}</DescriptionField>
        </BodyInfo>
      </Container>
    </>
  );
}

export default EventDash;
