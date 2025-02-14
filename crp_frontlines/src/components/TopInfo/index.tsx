import { Button } from "antd"
import { NewIssue, OpenIssues } from "../EventHub/styles"
import { useAuth } from "../../context/AuthProvider/useAuth"
import { useNavigate } from "react-router"
import { TopInfoProps } from "./types"
import { TopInfo } from "./styles"

function TopTitle({ title, type }: TopInfoProps) {

    const auth = useAuth();
    const navigate = useNavigate()

    return (
        <>
            <TopInfo >
                <div>
                    <h2>{title}</h2>
                </div>
                <div>
                    {type === 'forms' && <OpenIssues color="blue" variant="dashed" onClick={() => navigate('/issue')} >Chamados ativos</OpenIssues>}
                    {type === 'new' && <NewIssue color="blue" variant="dashed" onClick={() => navigate('/newissue')} >Novo chamado</NewIssue>}
                    <Button onClick={auth.logout} danger >Logout</Button>
                </div>
            </TopInfo>
        </>
    )
}

export default TopTitle