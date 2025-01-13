//import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import IssueForm from "./components/IssueForms";
import EventDash from "./components/EventDash";
import { useEffect, useState } from "react";

function App() {
  const [gotdata, setGotdata] = useState([])

  useEffect(() => {

    const fetchData = async () => {

      const data = await fetch('http://172.16.239.44:8000/api/v1/chamados');

      const json = await data.json();

      console.log(json);
      setGotdata(json)
    }
    fetchData()
  }, [])


  /* const event = [
    {
      id: 1,
      eventTitle: "Queda servidor LDAP",
      eventSector: "Searp - TELARUS",
      eventArea: "Infraestrutura",
      eventCriticality: "Baixa",
      eventCriticalityColor: "var(--primary-blue)",
      eventPriority: "Baixa",
      eventDescription:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    },
    {
      id: 2,
      eventTitle: "Falha no capri",
      eventSector: "QA",
      eventArea: "Atendimento",
      eventCriticality: "Média",
      eventCriticalityColor: "var(--primary-yellow)",
      eventPriority: "Média",
      eventDescription:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    },
    {
      id: 3,
      eventTitle: "Teste de falha",
      eventSector: "QA",
      eventArea: "Atendimento",
      eventCriticality: "Baixa",
      eventCriticalityColor: "var(--primary-blue)",
      eventPriority: "Baixa",
      eventDescription:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    },
  ]; */
  return (
    <>
      {gotdata.map((item) => (
        <EventDash key={Math.random()} data={item} />
      ))}
    </>
  );
}

export default App;
