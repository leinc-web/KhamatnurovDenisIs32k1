// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TodoPage from './pages/TodoPage';
import CreateServer from './pages/CreateServer';
import CreateChannel from './pages/CreateChannel';
import './styles.css';

function App() {
  const [servers, setServers] = useState([]);
  const [channels, setChannels] = useState([]);

  const handleCreateServer = (serverName) => {
    setServers([...servers, serverName]);
  };

  const handleCreateChannel = (channelName) => {
    setChannels([...channels, channelName]);
  };

  return (
    <Router>
      <div className="container">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/todo">Todo List</Link></li>
            <li><Link to="/create-server">Create Server</Link></li>
            <li><Link to="/create-channel">Create Channel</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/todo" element={<TodoPage />} />
          <Route path="/create-server" element={<CreateServer onCreateServer={handleCreateServer} />} />
          <Route path="/create-channel" element={<CreateChannel onCreateChannel={handleCreateChannel} />} />
        </Routes>
        <div>
          <h2>Servers</h2>
          <ul>
            {servers.map((server, index) => (
              <li key={index}>{server}</li>
            ))}
          </ul>
          <h2>Channels</h2>
          <ul>
            {channels.map((channel, index) => (
              <li key={index}>{channel}</li>
            ))}
          </ul>
        </div>
      </div>
    </Router>
  );
}

export default App;
