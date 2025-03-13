import { Container, OpenIssuePointerDiv, PointerDiv } from "./styles";

function DashBoard() {
  return (
    <>
      <Container>
        <OpenIssuePointerDiv $fieldcolor="var(--primary-yellow)">
          <header>Chamados em aberto</header>
          <div>
            <span>8</span>
          </div>
          <div>
            <section>
              5 <span>Requisições</span>
            </section>
            <section>
              3 <span>Ocorrências</span>
            </section>
          </div>
        </OpenIssuePointerDiv>

        <PointerDiv $fieldcolor="var(--secondary-green)">
          <header>Chamados atendidos</header>
          <div>
            <span>250</span>
          </div>
        </PointerDiv>
        <PointerDiv $fieldcolor="var(--primary-red)">
          <header>Chamados não atendidos</header>
          <div>
            <span>5</span>
          </div>
        </PointerDiv>
      </Container>
    </>
  );
}

export default DashBoard;
