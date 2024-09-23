import { useState } from "react";
import "./App.css";
import TextField from "./components/MainForm";

const Deafultform = {
  title: "",
  age: 0,
};
function App() {
  const [ageForm, setAgeForm] = useState(Deafultform);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAgeForm((prevState) => ({
      ...prevState,
      [e.target.title]: e.target.value,
    }));
  };

  const handleShow = () => {
    console.log(ageForm);
    setAgeForm(Deafultform);
  };

  return (
    <>
      <div>
        <h4>Test List</h4>
        <br />
        <TextField onChange={onChange} props={Deafultform} />

        <button onClick={handleShow}>Mostrar</button>
      </div>
    </>
  );
}

export default App;
