
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import TodoPage from './pages/TodoPage';
import CreateServer from './pages/CreateServer';
import CreateChannel from './pages/CreateChannel';
import './styles.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/todo" element={<TodoPage />} />
          <Route path="/create-server" element={<CreateServer />} />
          <Route path="/create-channel" element={<CreateChannel />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
