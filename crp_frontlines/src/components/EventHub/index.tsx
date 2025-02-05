import { useState, useEffect } from "react"
import { gotData } from "./types"
import { FilterContainer } from "../../styles"
import EventDash from "../EventDash"
import { Button } from "antd"
import { TopNav } from "./styles"
import { useAuth } from "../../context/AuthProvider/useAuth"
import { baseURL } from "../../services/api"
import axios from "axios"


function EventHub() {
  const [issueData, seIssueDate] = useState([])

  const [filteredIssues, setFilteredIssues] = useState([])

  const auth = useAuth()

  const setFilter = (arg: string) => {
    const filtered = issueData.filter((item: gotData) => item.eventType === arg)
    setFilteredIssues(filtered)
  }
  const resetFilter = () => {
    setFilteredIssues([])
  }

  useEffect(() => {
    const fetchData = async () => {
      await axios.get(baseURL).then((response) => {
        console.log(response.data);
        seIssueDate(response.data)
      })
    }
    fetchData()
  }, [])

  return <>
    <TopNav>
      <h6>{auth.email?.toLocaleUpperCase().trimStart()}</h6>
      <Button onClick={auth.logout} danger >Logout</Button>
    </TopNav>

    {issueData.length > 0 && <FilterContainer>

      <div><h3>Filtros</h3></div>
      <div>
        <Button onClick={() => setFilter('requisicao')} >Solicitações</Button>
        <Button onClick={() => setFilter('ocorrencia')} >Ocorrência</Button>
        <Button onClick={() => resetFilter()}>Apagar filtro</Button>
      </div>
    </FilterContainer>}

    {filteredIssues.length == 0 ? issueData.map((item) => (
      <EventDash key={Math.random()} data={item} />
    ))
      : filteredIssues.map((item) => <EventDash key={Math.random()} data={item} />)
    }
  </>
}

export default EventHub