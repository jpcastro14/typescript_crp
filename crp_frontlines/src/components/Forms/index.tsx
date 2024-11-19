import Input from "../Input";
import { Container } from "./styles";

function IssueForm() {
  return (
    <Container>
      <Input type="text" placeholder="Escreva aqui" />
      <Input type="number" placeholder="Teste placeholder" />
    </Container>
  );
}

export default IssueForm;
