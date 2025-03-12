import { Container, PointerDiv } from "./styles";

interface PointerDivProps {
  $fieldcolor?: string;
}

function DashBoard() {
  return (
    <>
      <Container>
        <PointerDiv $fieldcolor="var(--primary-yellow)">a</PointerDiv>
        <PointerDiv>a</PointerDiv>
        <PointerDiv>a</PointerDiv>
      </Container>
    </>
  );
}

export default DashBoard;
