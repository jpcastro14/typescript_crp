import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import IssueForm from './components/IssueForms/index.tsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
//import EventDash from './components/EventDash/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/newIssue" element={<IssueForm />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
