import { useState, useEffect } from "react";
import { NoIssue } from "./styles";
import EventDash from "../EventDash";
import { baseURL, homeURL } from "../../services/api";
import axios from "axios";
import TopTitle from "../TopInfo/index";
import DashBoard from "../DashBoard";
import { EventDashProps } from "../EventDash/types";

function EventHub() {
  const [issueData, seIssueDate] = useState<EventDashProps[]>([]);
  const [statusMessage, setStatusMessage] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(baseURL)
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

  const requestIssues = issueData.filter(
    (issue) => issue.eventType == "requisicao"
  );

  const incidentIssued = issueData.filter(
    (issue) => issue.eventType == "ocorrencia"
  );

  return (
    <>
      <TopTitle title="Tellarus Support" type="new" />
      <DashBoard
        dashMeta={activeIssues}
        req={requestIssues.length}
        inc={incidentIssued.length}
      />
      {issueData.length == 0 ? (
        <NoIssue>Sem chamados ativos</NoIssue>
      ) : (
        issueData.map((item) => <EventDash propData={item} key={item.id} />)
      )}
    </>
  );
}

export default EventHub;
