import "./App.css";

import { useReducer, useState } from "react";

type User = {
  age: number;
  text: string;
};

type Action = { type: "add"; age: number; text: string };

const initialState: User[] = [];

function reducer(state: User[], action: Action) {
  switch (action.type) {
    case "add":
      console.log(state);
      return [...state, { age: action.age, text: action.text }];
  }
}

function App() {
  const [input, setInput] = useState("");
  const [age, setAge] = useState(0);

  const [state, dispatch] = useReducer(reducer, initialState);

  function addTask() {
    dispatch({ type: "add", text: input, age: age });
    setInput("");
    setAge(0);
  }

  return (
    <>
      <div>
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <br />
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <br />
        <button onClick={addTask}>Add</button>
      </div>
      <div>
        {state.map((item) => (
          <p>
            {item.text}
            {"  "}
            {item.age}
          </p>
        ))}
      </div>
    </>
  );
}

export default App;
