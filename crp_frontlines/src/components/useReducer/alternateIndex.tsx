import { useReducer } from "react";

import { FormContainer, Header } from "./styles";

type State = {
  text: string;
  description: string;
  subDescription?: string;
};

const initializeState = {
  text: "a",
  description: "teste",
};

type Action =
  | { type: "increment"; text: string; description: string }
  | { type: "test"; subDescription?: string };

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "increment":
      console.log(state);
      return {
        ...state,
        text: action.text,
        description: action.description,
      };
    case "test":
      console.log(state);
      return {
        ...state,
        subDescription: "test subdescription",
      };
  }
}

function TaskList() {
  const [state, dispatch] = useReducer(reducer, initializeState);

  return (
    <>
      <Header>
        <h3>Tasklist - useReducer Hook</h3>
      </Header>
      <FormContainer>
        <button
          onClick={() =>
            dispatch({
              type: "increment",
              text: "Prioridade baixa",
              description: "Teste de descrição",
            })
          }
        >
          +
        </button>
        <button onClick={() => dispatch({ type: "test" })}>Case test</button>
        <textarea>
          {state.subDescription ? (
            <p>{state.subDescription}</p>
          ) : (
            <p>Sem dados</p>
          )}
        </textarea>
      </FormContainer>
    </>
  );
}

export default TaskList;
