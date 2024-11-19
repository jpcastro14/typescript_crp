import { InputContainer } from "./styles";


type InputProps = {
    type: string;
    placeholder: string
}

function Input({ type, placeholder }: InputProps) {
    return <InputContainer>
        <input type={type} placeholder={placeholder} />
    </InputContainer>
}

export default Input