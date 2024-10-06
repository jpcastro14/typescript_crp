import { FunctionComponent, useEffect, useState} from "react";
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

type Event = {
  id:number;
  title:string;
  eventSector:string;
  eventArea:string;
  eventCriticality: string;
  eventPriority:string;
  eventDescription: string;
}

const EventDash:FunctionComponent =() => {
  const [posts, setPosts] = useState<Event | undefined>()
  const [open, setOpen] = useState<boolean>(false);

  useEffect(()=> {
    
    const getPosts = async () =>{
      const response = await fetch(`http://localhost:4000/posts/1/`);
      const data = await response.json()
      console.log(data);
      
      setPosts(data)
    }

    getPosts();
  },[])




  return (
    <>
      <Container>
        <HeaderInfo>
          <span className="EventCategory"></span>
          <div className="EventType"></div>
          <EventTitle>
            <span>{posts?.title}</span>
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
              <SectorButton>{posts?.eventSector}</SectorButton>
            </PointerContainer>
            {/* ------------------Area--------------------------*/}
            <PointerContainer>
              <label>Area Afetada</label>
              <AreaButton>{posts?.eventArea}</AreaButton>
            </PointerContainer>
            {/* ------------------Criticality------------------ */}
            <PointerContainer>
              <label>Criticalidade</label>
              <CriticButton levelColor={"#157145"}>{posts?.eventCriticality}</CriticButton>
            </PointerContainer>
            {/* ------------------Priority--------------------- */}
            <PointerContainer>
              <label>Prioridade</label>
              <PriorityButton levelColor={"#fed766"}>{posts?.eventPriority}</PriorityButton>
            </PointerContainer>
          </PointerField>
          <DescriptionField>
            {posts?.eventDescription}
          </DescriptionField>
        </BodyInfo>
      </Container>
    </>
  );
}

export default EventDash;
