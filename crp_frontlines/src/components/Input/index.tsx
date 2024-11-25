import { InputContainer } from "./styles";
import { Form } from "react-bootstrap";

type InputProps = {
  type: string;
  placeholder: string;
};

function Input({ type, placeholder }: InputProps) {
  return (
    <InputContainer>
      <Form.Group className="mb-3"></Form.Group>
    </InputContainer>
  );
}

export default Input;
