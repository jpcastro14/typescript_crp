import { Button } from "antd"
import { NewIssue } from "../EventHub/styles"
import { useAuth } from "../../context/AuthProvider/useAuth"
import { useNavigate } from "react-router"
import { TopInfoProps } from "./types"
import { TopInfo } from "./styles"

function TopTitle({ title, children }: TopInfoProps) {

    const auth = useAuth();
    const navigate = useNavigate()

    return (
        <>
            <TopInfo >
                <div>
                    <h2>{title}</h2>
                </div>
                <div>
                    <NewIssue onClick={() => { navigate('/newissue') }} color="geekblue" variant="outlined" >Novo Chamado</NewIssue>
                    <Button onClick={auth.logout} danger >Logout</Button>
                </div>
            </TopInfo>
        </>
    )
}

export default TopTitle