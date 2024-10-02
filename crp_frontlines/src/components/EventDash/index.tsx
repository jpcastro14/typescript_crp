import {
  Container,
  HeaderInfo,
  EventTitle,
  EventAction,
  PointerField,
} from "./styles";

import PointerPill from "./PointerPill";

function EventDash() {
  return (
    <>
      <Container>
        <HeaderInfo>
          <span className="EventCategory">a</span>
          <div className="EventType">b</div>
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
        <PointerField>
          <PointerPill text="teste" />
        </PointerField>
      </Container>
    </>
  );
}

export default EventDash;
