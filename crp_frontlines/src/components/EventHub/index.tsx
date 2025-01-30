import { useState, useEffect } from "react"
import { gotData } from "./types"
import { FilterContainer } from "../../styles"
import EventDash from "../EventDash"
import { Button } from "antd"
import { TopNav } from "./styles"
import { useAuth } from "../../context/AuthProvider/useAuth"


function EventHub() {
  const [gotdata, setGotdata] = useState([])

  const [filteredIssues, setFilteredIssues] = useState([])

  const auth = useAuth()

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

  return <>
    <TopNav>
      <h6>Agente:  {auth.email}</h6>
      <Button onClick={auth.logout} danger >Deslogar</Button>
    </TopNav>
    <FilterContainer>
      <div><h3>Filtros</h3></div>
      <div>
        <Button onClick={() => setFilter('requisicao')} >Solicitações</Button>
        <Button onClick={() => setFilter('ocorrencia')} >Ocorrência</Button>
        <Button onClick={() => resetFilter()}>Apagar filtro</Button>
      </div>
    </FilterContainer>
    {filteredIssues.length == 0 ? gotdata.map((item) => (
      <EventDash key={Math.random()} data={item} />
    ))
      : filteredIssues.map((item) => <EventDash key={Math.random()} data={item} />)
    }
  </>
}

export default EventHub