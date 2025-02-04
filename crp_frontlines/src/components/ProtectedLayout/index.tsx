import { useAuth } from "../../context/AuthProvider/useAuth"
import Login from "../Login"

export const ProtectedLayout = ({ children }: { children?: JSX.Element }) => {
    const auth = useAuth()

    if (!auth.email) {
        return (
            <>
                <h1></h1>
                <Login />
            </>
        )
    }

    return children
}

