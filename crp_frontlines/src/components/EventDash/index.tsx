import {
  Container,
  HeaderInfo,
  EventTitle,
  EventAction,
  PointerField,
} from "./styles";

function EventDash() {
  return (
    <>
      <Container>
        <HeaderInfo>
          <span className="EventCategory"></span>
          <div className="EventType"></div>
          <EventTitle>
            <span>Server Inlet Failure</span>
            <p>Ocorrido: Segunda Feira, 30 de setembro as 19:51</p>
          </EventTitle>
          <EventAction>
            <button>a</button>
            <button>b</button>
            <button>c</button>
          </EventAction>
        </HeaderInfo>
        <PointerField></PointerField>
      </Container>
    </>
  );
}

export default EventDash;
