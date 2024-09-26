import { useReducer, useState } from "react";

import { ButtonDiv, FormContainer, Header } from "./styles";

type User = {
  id: number;
  userName: string;
  surName: string;
  age: number;
  text?: string;
};

type Action =
  | { type: "add"; userName: string; surName: string; age: number }
  | { type: "remove"; id: number }
  | { type: "filter"; text: string }
  | { type: "resetFilter" };

const initialState: User[] = [];

function reducer(state: User[], action: Action) {
  switch (action.type) {
    case "add":
      console.log(state);
      return [
        ...state,
        {
          id: Date.now(),
          userName: action.userName,
          surName: action.surName,
          age: action.age,
        },
      ];
    case "remove":
      return state.filter((item) => item.id !== action.id);
    case "filter":
      return state.filter((item) => item.userName == action.text);
    case "resetFilter":
      return state;
  }
}

function TaskList() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [baseUser] = useState({
    userName: "",
    surName: "",
    age: 0,
  });

  const [userState, setUserState] = useState(baseUser);

  function handleType(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setUserState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function addTask() {
    dispatch({
      type: "add",
      userName: userState.userName,
      surName: userState.surName,
      age: userState.age,
    });
    setUserState(baseUser);
  }

  return (
    <>
      <Header>
        <h3>Tasklist - useReducer Hook</h3>
      </Header>
      <FormContainer>
        <label>Name</label>
        <input
          type="text"
          name="userName"
          value={userState.userName}
          onChange={handleType}
        />

        <label>Surname</label>
        <input
          type="text"
          name="surName"
          value={userState.surName}
          onChange={handleType}
        />

        <label>Age</label>
        <input
          type="number"
          name="age"
          value={userState.age}
          onChange={handleType}
        />
        <ButtonDiv>
          <button onClick={addTask}>Add Task</button>
          <button onClick={() => dispatch({ type: "filter", text: "joao" })}>
            Create spare filter
          </button>
          <button onClick={() => dispatch({ type: "resetFilter" })}>
            Reset Filters
          </button>
        </ButtonDiv>
        <div>
          <ul>
            {state.map((item) => (
              <li key={item.id}>
                <span>
                  {item.userName} {item.age}
                </span>
                <button
                  onClick={() => dispatch({ type: "remove", id: item.id })}
                >
                  remove
                </button>
                <br />
              </li>
            ))}
          </ul>
        </div>
      </FormContainer>
    </>
  );
}

export default TaskList;
