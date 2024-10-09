import { FunctionComponent, useState } from "react";
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
    eventCriticality: {
      criticality: string;
      criticalityColor: string;
    };
    eventPriority?: string;
    eventDescription?: string;
  };
  sparedata: string;
};

const EventDash: FunctionComponent<EventDashProps[]> = ({ data }) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      {data.map((item) => (
        <Container>
          <HeaderInfo>
            <EventCategory
              levelColor={item.eventCriticality.criticalityColor}
            />
            <div className="EventType"></div>
            <EventTitle>
              <span>{item.eventTitle}</span>
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
                <SectorButton>{item.eventSector}</SectorButton>
              </PointerContainer>
              {/* ------------------Area--------------------------*/}
              <PointerContainer>
                <label>Area Afetada</label>
                <AreaButton>{item.eventArea}</AreaButton>
              </PointerContainer>
              {/* ------------------Criticality------------------ */}
              <PointerContainer>
                <label>Criticalidade</label>
                <CriticButton
                  levelColor={item.eventCriticality.criticalityColor}
                >
                  {item.eventCriticality.criticality}
                </CriticButton>
              </PointerContainer>
              {/* ------------------Priority--------------------- */}
              <PointerContainer>
                <label>Prioridade</label>
                <PriorityButton levelColor={"#fed766"}>
                  {item.eventPriority}
                </PriorityButton>
              </PointerContainer>
            </PointerField>
            <DescriptionField>{item.eventDescription}</DescriptionField>
          </BodyInfo>
        </Container>
      ))}
    </>
  );
};

export default EventDash;
