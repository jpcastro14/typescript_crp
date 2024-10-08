import { FunctionComponent, useState} from "react";
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

type EventDashProps = {
  data:{
  id?:number;
  eventTitle?:string;
  eventSector?:string;
  eventArea?:string;
  eventCriticality?: string;
  eventPriority?:string;
  eventDescription?: string;
}
sparedata:string
}


const EventDash:FunctionComponent<EventDashProps> =({data}) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <Container>
        <HeaderInfo>
          <span className="EventCategory"></span>
          <div className="EventType"></div>
          <EventTitle>
            <span>{data.eventTitle}</span>
            <p>Ocorrido: Segunda Feira, 30 de setembro as 19:51</p>
          </EventTitle>
          <EventAction>
            <button></button>
            <button onClick={()=> setOpen(!open)}>
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
              <CriticButton levelColor={"#157145"}>{data.eventCriticality}</CriticButton>
            </PointerContainer>
            {/* ------------------Priority--------------------- */}
            <PointerContainer>
              <label>Prioridade</label>
              <PriorityButton levelColor={"#fed766"}>{data.eventPriority}</PriorityButton>
            </PointerContainer>
          </PointerField>
          <DescriptionField>
            {data.eventDescription}
          </DescriptionField>
        </BodyInfo>
      </Container>
    </>
  );
}

export default EventDash;
