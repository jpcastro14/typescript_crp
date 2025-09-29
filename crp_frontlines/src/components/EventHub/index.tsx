import { useState, useEffect } from "react";
import { NoIssue } from "./styles";
import EventDash from "../EventDash";
import axios from "axios";
import TopTitle from "../TopInfo/index";
import DashBoard from "../DashBoard";
import { EventDashProps } from "../EventDash/types";
import { baseURL } from "../../services/api";

function EventHub() {
  const [issueData, seIssueDate] = useState<EventDashProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`${baseURL}tickets/`)
        .then((response) => {
          seIssueDate(response.data);
        })
        .catch((error) => {
          console.log(error.message);
        });
    };
    fetchData();
  }, []);

  const activeIssues = issueData.length;
  const requestIssues = issueData.filter((issue) => issue.type == "requisicao");
  const incidentIssued = issueData.filter(
    (issue) => issue.type == "ocorrencia"
  );

  return (
    <>
      <TopTitle title="Tellarus Support" type="new" />
      <DashBoard
        activeTickets={activeIssues}
        requisitions={requestIssues.length}
        incidents={incidentIssued.length}
      />
      {issueData.length == 0 ? (
        <NoIssue>Sem chamados ativos</NoIssue>
      ) : (
        issueData.map((item) => <EventDash ticket={item} key={item.id} />)
      )}
    </>
  );
}

export default EventHub;
