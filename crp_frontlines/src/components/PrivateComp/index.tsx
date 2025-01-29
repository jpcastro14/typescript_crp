import { useAuth } from "../../context/AuthProvider/useAuth"

export const PrivateComp = () => {
    const auth = useAuth()
    return (

        <>
            <h1>Logado</h1>
            <button onClick={auth.logout}></button>
        </>
    )
}