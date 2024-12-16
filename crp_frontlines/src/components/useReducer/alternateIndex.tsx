import { useContext, useEffect, useReducer } from "react";

import { FormContainer, Header } from "./styles";
import { DashContext } from "../Providers/DataProvider";

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
  | {
    type: "increment";
    text: string;
    description: string;
  }
  | { type: "test"; subDescription: string };

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
        text: "Sem texto",
        subDescription: "test subdescription",
      };
  }
}

function TaskList() {
  const [state, dispatch] = useReducer(reducer, initializeState);
  const user = useContext(DashContext);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <>
      <Header>
        <h3>Tasklist - useReducer Hook{user?.userName}</h3>
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
        <button
          onClick={() =>
            dispatch({
              type: "test",
              subDescription: "Teste de subdescription",
            })
          }
        >
          Case test
        </button>
        <p>{state.subDescription}</p>
      </FormContainer>
    </>
  );
}

export default TaskList;
