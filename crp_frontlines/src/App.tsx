import { useState, useReducer } from "react";
import "./App.css";
import TextField from "./components/MainForm";

const defaultForm = {
  title: "",
  age: 0,
};

const configProps = {
  title: 'title',
  age: 'age'
}

type User ={
  title?:string,
  age?:number;
}

type Action = | { type: 'add', age:number, title:string};

function reducer (state:User, action:Action){
  switch (action.type) {
    case 'add':
      console.log(action.type, state);
      return{...state,title:action.title, age:action.age}
  }
}

function App() {
  const [ageForm, setAgeForm] = useState(defaultForm);

  const [state, dispatch] = useReducer(reducer, ageForm);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAgeForm((prevState) => ({
      ...prevState,
      [e.target.title]: e.target.value,
    }));
  };

  const handleShow = () => {
    dispatch({type:"add", title:ageForm.title, age:ageForm.age})
    
  };

  return (
    <>
      <div>
        <h4>Test List</h4>
        <br />
        <TextField onChange={onChange} configProps={configProps} props={defaultForm} />

        <button onClick={handleShow}>Mostrar</button>
        <p>Nome do colaborador: {state.title}, idade do colaborador: {state.age} anos</p>
      </div>
    </>
  );
}

export default App;
