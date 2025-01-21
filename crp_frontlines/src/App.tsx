//import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import IssueForm from "./components/IssueForms";
import EventDash from "./components/EventDash";
import { useEffect, useState } from "react";

type gotData = {
  eventType: string;
}

function App() {
  const [gotdata, setGotdata] = useState([])

  function setFilter() {
    const filtered = gotdata.filter((item: gotData) => item.eventType === "requisicao")

    setGotdata(filtered)

    console.log(filtered);

  }

  useEffect(() => {

    const fetchData = async () => {

      const data = await fetch('http://172.16.239.44:8000/api/v1/chamados');

      const json = await data.json();

      console.log(typeof (json));
      setGotdata(json)
    }
    fetchData()
  }, [])


  return (
    <>
      <button onClick={setFilter} >teste</button>
      {gotdata.map((item) => (
        <EventDash key={Math.random()} data={item} />
      ))}
    </>
  );
}

export default App;
