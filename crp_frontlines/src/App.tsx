//import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import IssueForm from "./components/IssueForms";
import { AuthProvider } from "./context/AuthProvider";
import { BrowserRouter, Route, Routes } from "react-router";
import { ProtectedLayout } from "./components/ProtectedLayout";
import Login from "./components/Login";
import EventHub from "./components/EventHub";

type gotData = {
  eventType: string;
  filtered: string;
}

function App() {

  return (
    <>


      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/issue" element={<ProtectedLayout children={<EventHub />} />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
