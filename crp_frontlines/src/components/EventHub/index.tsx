import { useState, useEffect } from "react"
import { gotData } from "./types"
import { FilterContainer, NoIssue } from "./styles"
import EventDash from "../EventDash"
import { Button } from "antd"
import { baseURL, homeURL } from "../../services/api"
import axios from "axios"
import TopTitle from "../TopInfo/index"


function EventHub() {
  const [issueData, seIssueDate] = useState([])

  const [filteredIssues, setFilteredIssues] = useState([])

  const [statusMessage, setStatusMessage] = useState<string>('')

  const setFilter = (arg: string) => {
    const filtered = issueData.filter((item: gotData) => item.eventType === arg)
    setFilteredIssues(filtered)
  }
  const resetFilter = () => {
    setFilteredIssues([])
  }

  useEffect(() => {
    const fetchData = async () => {
      await axios.get(baseURL)
        .then((response) => {
          seIssueDate(response.data)
        })
        .catch((error) => { error.message === "Network Error" && setStatusMessage("Erro de conexão") })
    }
    fetchData()
  }, [])

  return <>
    <TopTitle title="Tellarus Support" type="new" />
    {issueData.length > 0 &&
      <FilterContainer>
        <div>
          <h3>Chamados em andamento</h3>
        </div>
        <div>
          <Button onClick={() => setFilter('requisicao')} >Solicitações</Button>
          <Button onClick={() => setFilter('ocorrencia')} >Ocorrência</Button>
          <Button onClick={() => resetFilter()} danger >Apagar filtro</Button>
          {filteredIssues.length > 0 && <p>{filteredIssues.length} Chamados encontrados</p>}
        </div>
      </FilterContainer>}

    {issueData.length == 0 && <NoIssue>{statusMessage}</NoIssue>}

    {filteredIssues.length == 0 ? issueData.map((item) => (
      <EventDash key={Math.random()} data={item} />
    ))
      : filteredIssues.map((item) => <EventDash key={Math.random()} data={item} />)
    }
  </>
}

export default EventHub