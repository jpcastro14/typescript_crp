import { useReducer, useState } from "react";

type User = {
  id:number;
  userName: string;
  surName: string;
  age: number;
};

type Action =  { type: "add",userName: string, surName:string, age:number } | {type:'remove' , id:number};

const initialState: User[] = [];

function reducer(state: User[], action: Action) {
  switch (action.type) {
    case "add":
      console.log(state);
      return [...state, { id:Date.now(), userName: action.userName, surName: action.surName, age:action.age }];
    case "remove":
      return state.filter((item)=> item.id !== action.id)
  }
}

function TaskList() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [baseUser] =useState({
    userName:'',
    surName: '',
    age: 0,
  })

  const [userState, setUserState] =useState(baseUser);

  function handleType(e: React.ChangeEvent<HTMLInputElement>) {
    const {name,value} = e.target
   setUserState((prevState)=> ({
    ...prevState,
    [name]: value,
   })
  )
  }

  function addTask() {
    dispatch({ type: "add", userName: userState.userName, surName:userState.surName, age:userState.age, })
    setUserState(baseUser)
  }

  return (
    <>
      <h3>Tasklist</h3>
      <label>Name</label>
      <input type="text" name="userName" value={userState.userName} onChange={handleType} />
      <br />
      <label>Surname</label>
      <input type="text" name="surName" value={userState.surName} onChange={handleType} />
      <br />
      <label>Age</label>
      <input type="number" name="age" value={userState.age} onChange={handleType} />
      <br />
      <br />
      <br />
      <button onClick={addTask }>Add Task</button>
      <div>
        <ul>
          {state.map((item)=> (
            <li key={item.id} >{item.userName} {item.age} <button  onClick={()=> dispatch({type:'remove', id:item.id})} >remove</button> <br/> </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default TaskList;
