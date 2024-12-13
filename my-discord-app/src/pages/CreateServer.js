// src/pages/CreateServer.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const CreateServer = ({ onCreateServer }) => {
  const [serverName, setServerName] = useState('');

  const handleCreateServer = () => {
    onCreateServer(serverName);
    setServerName('');
  };

  return (
    <div className="container">
      <h1>Create Server</h1>
      <nav>
        <ul>
          <li><Link to="/home">Домашняя</Link></li>
        </ul>
      </nav>
      <div>
        <input
          type="text"
          placeholder="Server Name"
          value={serverName}
          onChange={(e) => setServerName(e.target.value)}
        />
        <button onClick={handleCreateServer}>Create</button>
      </div>
    </div>
  );
};

export default CreateServer;


