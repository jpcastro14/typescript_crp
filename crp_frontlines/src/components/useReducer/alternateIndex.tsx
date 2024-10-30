import { useReducer } from "react";

import { FormContainer, Header } from "./styles";

type State = {
  counter: number;
  text?: string;
  description?: string;
};

const initializeState = {
  counter: 0,
  text: "a",
  description: "teste",
};

type Action =
  | { type: "increment"; number: number; text?: string; description?: string }
  | { type: "decrement" };

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "increment":
      console.log(state);
      return {
        ...state,
        counter: action.number,
        text: action.text,
      };
    case "decrement":
      return {
        counter: state.counter - 1,
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
        <p>{state.counter}</p>
        <button
          onClick={() =>
            dispatch({
              type: "increment",
              number: 3,
              text: "Prioridade baixa",
              description: "Teste de descrição",
            })
          }
        >
          +
        </button>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      </FormContainer>
    </>
  );
}

export default TaskList;
