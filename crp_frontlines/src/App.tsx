import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./context/AuthProvider";
import { BrowserRouter, Route, Routes } from "react-router";
import { ProtectedLayout } from "./components/ProtectedLayout";
import Login from "./components/Login";
import EventHub from "./components/EventHub";
import IssueForm from "./components/IssueForms";
import ReducerComponent from "./components/ReducerComponent";
import IssueProvider from "./context/IssueProvider";

function App() {
  return (
    <>
      <AuthProvider>
        <IssueProvider>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={<ProtectedLayout children={<EventHub />} />}
              />
              <Route
                path="/issue"
                element={<ProtectedLayout children={<EventHub />} />}
              />
              <Route
                path="/newissue"
                element={<ProtectedLayout children={<IssueForm />} />}
              />
              <Route path="/login" element={<Login />} />
              <Route path="/reducer" element={<ReducerComponent />} />
            </Routes>
          </BrowserRouter>
        </IssueProvider>
      </AuthProvider>
    </>
  );
}

export default App;
