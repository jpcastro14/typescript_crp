import "./App.css";
import TextField from "./components/MainForm";

function App() {
  const showTest = (e) => {
    console.log(e.target.value);
  };

  return <TextField onChange={showTest} />;
}

export default App;
