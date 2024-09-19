import "./App.css";

import { useReducer } from "react";

type State = {
  count: number;
};

type Action = | { type: "add" } | { type: "decrement" };

const initializestate = { count: 0 };

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "add":
      console.log(state);
      console.log(action.type);
      return { count: state.count + 1 };
    case "decrement":
      console.log(state);
      console.log(action.type);
      return { count: state.count - 1 };
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initializestate);

  return (
    <>
      <div>
        <h1>{state.count}</h1>
        <button>-</button>
        <button onClick={() => dispatch({ type: "add" })}>+</button>
      </div>
    </>
  );
}

export default App;
