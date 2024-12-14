
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
  const handleCreateServer = (serverName) => {
    console.log('Server created:', serverName);
    // Добавьте вашу логику создания сервера здесь
  };

  const handleCreateChannel = (channelName) => {
    console.log('Channel created:', channelName);
    // Добавьте вашу логику создания канала здесь
  };

  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/todo" element={<TodoPage />} />
          <Route path="/create-server" element={<CreateServer onCreateServer={handleCreateServer} />} />
          <Route path="/create-channel" element={<CreateChannel onCreateChannel={handleCreateChannel} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
