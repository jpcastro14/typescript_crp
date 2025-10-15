import { useContext, useEffect, useState } from "react";
import { Container, OpenIssuePointerDiv, PointerDiv } from "./styles";
import { mainIssue } from "../IssueForms/types";
import axios from "axios";
import { DashBoardProps } from "./types";
import { IssueContext } from "../../context/IssueProvider";

function DashBoard({ activeTickets, requisitions, incidents }: DashBoardProps) {
  const [closedIssues, SetClosedIssues] = useState<mainIssue[]>([]);
  const { issue } = useContext(IssueContext);

  const attendedIssues = closedIssues.filter(
    (issue) => issue.finalStatus == true
  );

  const unattendedIssues = closedIssues.filter(
    (issue) => issue.finalStatus == false
  );

  return (
    <>
      <Container>
        <OpenIssuePointerDiv $fieldcolor="var(--primary-yellow)">
          <header>Total de chamados</header>
          <div>
            <span>{activeTickets}</span>
          </div>
          <div>
            <section>
              {requisitions}
              <span>Requisições</span>
            </section>
            <section>
              {incidents}
              <span>Ocorrências</span>
            </section>
          </div>
        </OpenIssuePointerDiv>

        <PointerDiv $fieldcolor="var(--secondary-green)">
          <header>Chamados atendidos</header>
          <div>
            <span>{attendedIssues.length}</span>
          </div>
        </PointerDiv>
        <PointerDiv $fieldcolor="var(--primary-red)">
          <header>Chamados não atendidos</header>
          <div>
            <span>{unattendedIssues.length}</span>
          </div>
        </PointerDiv>
      </Container>
    </>
  );
}

export default DashBoard;
