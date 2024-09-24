import { useReducer, useState } from "react";

type User = {
  userName: string;
  surName: string;
  age: number;
};

type Action = { type: "add" };

const initialState: User[] = [];

function reducer(state: User[], action: Action) {
  switch (action.type) {
    case "add":
      console.log(state);
      return [...state, { userName: "joão", surName: "castro", age: 30 }];
  }
}

function TaskList() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h3>Tasklist</h3>
      <label>Name</label>
      <input type="text" name="userName" />
      <br />
      <label>Surname</label>
      <input type="text" name="surName" />
      <br />
      <label>Age</label>
      <input type="number" name="age" />
      <br />
      <br />
      <br />
      <button onClick={() => dispatch({ type: "add" })}>Add Task</button>
      <div>
        <ul>
          <li>Task - 01</li>
        </ul>
      </div>
    </>
  );
}

export default TaskList;
