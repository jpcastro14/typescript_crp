import { useState, useEffect } from "react"
import { gotData } from "./types"
import { FilterContainer } from "./styles"
import EventDash from "../EventDash"
import { Button } from "antd"
import { NewIssue, TopNav, UserFields } from "./styles"
import { useAuth } from "../../context/AuthProvider/useAuth"
import { baseURL } from "../../services/api"
import axios from "axios"
import { useNavigate } from "react-router"
import TopInfo from "../TopInfo/index"
import TopTitle from "../TopInfo/index"


function EventHub() {
  const [issueData, seIssueDate] = useState([])

  const [filteredIssues, setFilteredIssues] = useState([])

  const auth = useAuth()
  const navigate = useNavigate()

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
        seIssueDate(response.data)
      })
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

    {filteredIssues.length == 0 ? issueData.map((item) => (
      <EventDash key={Math.random()} data={item} />
    ))
      : filteredIssues.map((item) => <EventDash key={Math.random()} data={item} />)
    }
  </>
}

export default EventHub