import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./context/AuthProvider";
import { BrowserRouter, Route, Routes } from "react-router";
import { ProtectedLayout } from "./components/ProtectedLayout";
import Login from "./components/Login";
import EventHub from "./components/EventHub";
import IssueForm from "./components/IssueForms";

function App() {

  return (
    <>


      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProtectedLayout children={<EventHub />} />} />
            <Route path="/issue" element={<ProtectedLayout children={<EventHub />} />} />
            <Route path="/newissue" element={<IssueForm />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
