import { useEffect, useState } from "react";
import { Container, OpenIssuePointerDiv, PointerDiv } from "./styles";
import { mainIssue } from "../IssueForms/types";
import axios from "axios";
import { CloseIssueDesc } from "../EventDash/styles";

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
        .get("http://172.16.239.233:8000/api/v1/closed/")
        .then((response) => {
          console.log(response.data);
          SetClosedIssues(response.data);
        });
    };
    fetchData();
  }, []);

  console.log("Aqui estão os chamados abertos:", dashMeta);

  const attendedIssues = closedIssues.filter(
    (issue) => issue.eventFinalStatus == true
  );

  const unattendedIssues = closedIssues.filter(
    (issue) => issue.eventFinalStatus == false
  );

  return (
    <>
      <Container>
        <OpenIssuePointerDiv $fieldcolor="var(--primary-yellow)">
          <header>Chamados em aberto</header>
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
