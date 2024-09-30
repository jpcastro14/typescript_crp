import { useRef, useState } from "react";
import { Container, Header } from "./styles";

function RefComponent() {
  const defaultRef = useRef<HTMLInputElement | null>(null);

  //const inputRef = useRef<HTMLInputElement | null>(null);

  // Initial Value NULL para referenciar elementos DOM
  // Refs não causam re-renderização do componente
  // Nunca devemos usar REFS no retorno da função componente!

  const [count, setCount] = useState<string | number>();

  /*   const handleIncrement = () => {
    //setCount(count + 1);

    console.log(`State Count => ${count}`);

    console.log(`Ref Count => ${defaultRef.current}`);

    console.log(inputRef.current?.value);
  }; */

  function handleState() {
    setCount(defaultRef.current?.value);
    console.log("State atualizado, componente re-renderizado");
  }

  const showThing = () => {
    console.log(`State após atualização => ${count}`);
  };

  return (
    <>
      <Header>
        <h3>State Manipulation - useRef Hook</h3>
      </Header>
      <Container>
        <label>Insira algum dado</label>
        <input type="text" ref={defaultRef} />
        <button onClick={handleState}>Populate state</button>
        <button onClick={showThing}>
          {" "}
          Show Value <u>only on console</u>
        </button>
        <p>{count ? count : "Sem state definido"}</p>
      </Container>
    </>
  );
}

export default RefComponent;
