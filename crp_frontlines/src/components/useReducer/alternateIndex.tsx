import { useReducer } from "react";

import { FormContainer, Header } from "./styles";

type State = {
  counter: number;
};

const initializeState = {
  counter: 0,
};

type Action = { type: "increment" } | { type: "decrement" };

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "increment":
      return {
        counter: state.counter + 1,
      };
    case "decrement":
      return {
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}

function TaskList() {
  const [state, dispatch] = useReducer(reducer, initializeState);

  function increment() {
    dispatch({ type: "increment" });
  }

  function decrement() {
    dispatch({ type: "decrement" });
  }

  return (
    <>
      <Header>
        <h3>Tasklist - useReducer Hook</h3>
      </Header>
      <FormContainer>
        <p>{state.counter}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </FormContainer>
    </>
  );
}

export default TaskList;
