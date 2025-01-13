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
  PrioritySelect,
  DescriptionField,
  BodyInfo,
  EventCategory,
  EventType,
} from "./styles";
import expand from "../assets/expand.svg";
import editevent from "../assets/pen.svg";
import headset from "../assets/headset.svg";

type EventDashProps = {
  data: {
    id?: number;
    created_at: string;
    eventTitle?: string;
    eventSector?: string;
    eventArea?: string;
    eventCriticality?: number;
    eventCriticalityColor?: string | undefined;
    eventPriority?: string;
    eventDescription?: string;
  };
};


function EventDash({ data }: EventDashProps) {
  const [open, setOpen] = useState<boolean>(true);
  const {
    created_at,
    eventTitle,
    eventSector,
    eventArea,
    eventCriticality,
    eventDescription,
    eventPriority,
  } = data;

  let { eventCriticalityColor } = data

  const created = new Date(created_at)
  const dateOptions: any = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }

  switch (eventCriticality) {
    case 1:
      eventCriticalityColor = 'var(--primary-blue)'
      break;
    case 2:
      eventCriticalityColor = "var(--primary-yellow)"
      break;
    case 3:
      eventCriticalityColor = "var(--primary-red)"
      break;
    default:
      break;
  }


  return (
    <>
      <Container key={data.eventTitle}>
        <HeaderInfo>
          <EventCategory $levelcolor={eventCriticalityColor} />
          <EventType>
            <img src={headset} />
          </EventType>
          <EventTitle>
            <span>{eventTitle}</span>
            <p>{created.toLocaleDateString('pt-BR', dateOptions)}</p>
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
              <SectorButton>{eventSector}</SectorButton>
            </PointerContainer>
            {/* ------------------Area--------------------------*/}
            <PointerContainer>
              <label>Area Afetada</label>
              <AreaButton>{eventArea}</AreaButton>
            </PointerContainer>
            {/* ------------------Criticality------------------ */}
            <PointerContainer>
              <label>Criticalidade</label>
              <CriticButton $levelcolor={eventCriticalityColor}>
                {eventCriticality}
              </CriticButton>
            </PointerContainer>
            {/* ------------------Priority--------------------- */}
            <PointerContainer>
              <label>Prioridade</label>
              <PrioritySelect
                $levelcolor={eventCriticalityColor}
              >
                {eventPriority}
              </PrioritySelect>
            </PointerContainer>
          </PointerField>
          <DescriptionField defaultValue={eventDescription} disabled />
        </BodyInfo>
      </Container>
    </>
  );
}

export default EventDash;
