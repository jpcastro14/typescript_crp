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
  PriorityBox,
  PriorityContainer,
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

/* function reducer(state: EventDashProps, action: Action) {
  switch (action.type) {
    case "low":
      console.log(state);
      return state;
    default:
      return state;
  }
} */

function EventDash({ data }: EventDashProps) {
  const [tData, setTdata] = useState(data);
  const [open, setOpen] = useState<boolean>(true);
  const [expanded, setExpanded] = useState<boolean>(false);
  const {
    eventTitle,
    eventSector,
    eventArea,
    eventCriticality,
    eventDescription,
    eventPriority,
  } = tData;

  function toggleExpansion() {
    setExpanded(!expanded);
    console.log(expanded);
  }

  function setPriority(priority?: number) {
    switch (priority) {
      case 1:
        setTdata({
          ...tData,
          eventPriority: "Baixa",
          eventCriticality: {
            criticalityColor: "var(--primary-blue)",
            criticality: "Baixa",
          },
        });
        break;
      case 2:
        setTdata({
          ...tData,
          eventPriority: "Média",
          eventCriticality: {
            criticalityColor: "var(--primary-yellow)",
            criticality: "Média",
          },
        });
        break;
      case 3:
        setTdata({
          ...tData,
          eventPriority: "Alta",
          eventCriticality: {
            criticalityColor: "var(--primary-red)",
            criticality: "Alta",
          },
        });
    }
  }

  return (
    <>
      <Container key={data.id}>
        <HeaderInfo>
          <EventCategory $levelcolor={eventCriticality?.criticalityColor} />
          <EventType>
            <img src={headset} />
          </EventType>
          <EventTitle>
            <span>{eventTitle}</span>
            <p>Ocorrido: Segunda Feira, 30 de setembro as 19:51</p>
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
            {/* ------------------Setor----------------------Ele [e teu p--*/}
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
              <CriticButton $levelcolor={eventCriticality?.criticalityColor}>
                {eventCriticality?.criticality}
              </CriticButton>
            </PointerContainer>
            {/* ------------------Priority--------------------- */}
            <PointerContainer>
              <label>Prioridade</label>
              <PrioritySelect
                onClick={toggleExpansion}
                $expanded={expanded}
                $levelcolor={eventCriticality?.criticalityColor}
              >
                {eventPriority}
              </PrioritySelect>
            </PointerContainer>
          </PointerField>

          <PriorityContainer $expanded={expanded}>
            <PriorityBox
              onClick={() => setPriority(1)}
              $expanded={expanded}
              $priorityColor={"var(--primary-blue)"}
            >
              Baixa
            </PriorityBox>
            <PriorityBox
              onClick={() => setPriority(2)}
              $expanded={expanded}
              $priorityColor="var(--primary-yellow)"
            >
              Média
            </PriorityBox>
            <PriorityBox
              onClick={() => setPriority(3)}
              $expanded={expanded}
              $priorityColor="var(--primary-red)"
            >
              Alta
            </PriorityBox>
          </PriorityContainer>

          <DescriptionField defaultValue={eventDescription} />
        </BodyInfo>
      </Container>
    </>
  );
}

export default EventDash;
