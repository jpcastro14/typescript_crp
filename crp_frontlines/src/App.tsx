import "./App.css";
import { useReducer, useState } from "react";

type Task = {
  id: number;
  text: string;
};
type Action = { type: "add"; text: string } | { type: "remove"; id: number };

const initializeState: Task[] = [];

function transpasser(state: Task[], action: Action) {
  switch (action.type) {
    case "add":
      console.log(state);
      return [...state, { id: Date.now(), text: action.text }];
    case "remove":
      return state.filter((task) => task.id !== action.id);
  }
}

function App() {
  const [input, setInput] = useState("");

  const [state, dispatch] = useReducer(transpasser, initializeState);

  function addTask() {
    dispatch({ type: "add", text: input });
    setInput("");
  }

  function removeTask(id: number) {
    dispatch({ type: "remove", id });
  }

  function showState(state: Task[]) {
    console.log(state);
  }

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button onClick={addTask}>Enviar</button>
      <button onClick={() => showState(state)}>Mostrar State</button>
      <ul>
        {state.map((item) => (
          <li key={item.id}>
            <span>
              {item.text}
              <button onClick={() => removeTask(item.id)}>Remove</button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
