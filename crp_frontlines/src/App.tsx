//import { useEffect, useState } from "react";
import { useState } from "react";
import "./App.css";
import EventDash from "./components/EventDash";
import AlertMessage from "./components/Messages/AlertMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import { DashContext } from "./components/Providers/DataProvider";

function App() {
  const event = [
    {
      id: 1,
      eventTitle: "Queda servidor LDAP",
      eventSector: "Searp - TELARUS",
      eventArea: "Infraestrutura",
      eventCriticality: {
        criticality: "Baixa",
        criticalityColor: "var(--primary-blue)",
      },

      eventPriority: "Baixa",
      eventDescription:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    },
    {
      id: 2,
      eventTitle: "Falha no capri",
      eventSector: "QA",
      eventArea: "Atendimento",
      eventCriticality: {
        criticality: "Média",
        criticalityColor: "var(--primary-yellow)",
      },

      eventPriority: "Média",
      eventDescription:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    },
    {
      id: 3,
      eventTitle: "Teste de falha",
      eventSector: "QA",
      eventArea: "Atendimento",
      eventCriticality: {
        criticality: "Baixa",
        criticalityColor: "var(--primary-blue)",
      },

      eventPriority: "Baixa",
      eventDescription:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    },
  ];
  const [open, setOpen] = useState<boolean>(true);
  return (
    <>
      <DashContext.Provider value={open}>
        {event.map((item) => (
          <EventDash key={item.id} data={item} />
        ))}
        <AlertMessage />
      </DashContext.Provider>
    </>
  );
}

export default App;
