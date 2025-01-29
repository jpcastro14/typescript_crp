import { useAuth } from "../../context/AuthProvider/useAuth"
import { setUserLocalStorage } from "../../context/AuthProvider/util"

export const ProtectedLayout = ({ children }: { children?: JSX.Element }) => {


    const auth = useAuth()

    if (!auth.email) {
        return (
            <h1>You dont have access</h1>
        )
    }

    return children
}

