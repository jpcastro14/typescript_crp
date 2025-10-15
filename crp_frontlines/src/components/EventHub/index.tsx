import { useState, useEffect, useContext } from "react";
import { NoIssue } from "./styles";
import EventDash from "../EventDash";
import axios from "axios";
import TopTitle from "../TopInfo/index";
import DashBoard from "../DashBoard";
import { EventDashProps } from "../EventDash/types";
import { baseURL } from "../../services/api";
import { IssueContext } from "../../context/IssueProvider";

function EventHub() {
  const { issue, sector } = useContext(IssueContext);

  const activeIssues = issue.length;
  const requestIssues = issue.filter((issue) => issue.type == "requisicao");
  const incidentIssued = issue.filter((issue) => issue.type == "ocorrencia");

  return (
    <>
      <TopTitle title="Tellarus Support" type="new" />
      <DashBoard
        activeTickets={activeIssues}
        requisitions={requestIssues.length}
        incidents={incidentIssued.length}
      />
      {issue.length == 0 ? (
        <NoIssue>Sem chamados ativos</NoIssue>
      ) : (
        issue.map((item) => <EventDash ticket={item} key={item.id} />)
      )}
    </>
  );
}

export default EventHub;
