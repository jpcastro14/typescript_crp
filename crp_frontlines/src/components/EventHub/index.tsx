import { useState, useEffect } from "react"
import { gotData } from "./types"
import { FilterContainer } from "../../styles"
import EventDash from "../EventDash"


function EventHub() {


  const [gotdata, setGotdata] = useState([])

  const [filteredIssues, setFilteredIssues] = useState([])

  const setFilter = (arg: string) => {
    const filtered = gotdata.filter((item: gotData) => item.eventType === arg)
    setFilteredIssues(filtered)
  }
  const resetFilter = () => {
    setFilteredIssues([])
  }

  useEffect(() => {

    const fetchData = async () => {

      const data = await fetch('http://172.16.239.44:8000/api/v1/chamados');

      const json = await data.json();

      console.log(typeof (json));
      setGotdata(json);
    }
    fetchData()
  }, [])

  return <><FilterContainer>
    <div><h3>Filtrar</h3></div>
    <div>
      <button onClick={() => setFilter('requisicao')} >Solicitações</button>
      <button onClick={() => setFilter('ocorrencia')} >Ocorrência</button>
      <button onClick={() => resetFilter()} >Apagar filtro</button>
    </div>
  </FilterContainer>
    {filteredIssues.length == 0 ? gotdata.map((item) => (
      <EventDash key={Math.random()} data={item} />
    ))
      : filteredIssues.map((item) => <EventDash key={Math.random()} data={item} />)
    }</>

}

export default EventHub