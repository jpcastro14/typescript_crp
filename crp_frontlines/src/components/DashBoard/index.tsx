import { useEffect, useState } from "react";
import { Container, OpenIssuePointerDiv, PointerDiv } from "./styles";
import { mainIssue } from "../IssueForms/types";
import axios from "axios";

type DashBoardProps = {
  dashMeta: number;
  req: number;
  inc: number;
};

function DashBoard({ dashMeta, req, inc }: DashBoardProps) {
  const [closedIssues, SetClosedIssues] = useState<mainIssue[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("http://172.28.248.82:8000/api/v1/tickets/")
        .then((response) => {
          SetClosedIssues(response.data);
        });
    };
    fetchData();
  }, []);

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
            <span>{dashMeta}</span>
          </div>
          <div>
            <section>
              {req}
              <span>Requisições</span>
            </section>
            <section>
              {inc}
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
