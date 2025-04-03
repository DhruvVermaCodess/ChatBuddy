import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import ChatBotHomePage from './pages/ChatBotHomePage'
import LandingPage from './pages/LandingPage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/chatbot" element={<ChatBotHomePage />} />
      </Routes>
    </Router>
  )
}

export default App