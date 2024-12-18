// src/pages/CreateChannel.js


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const CreateChannel = ({ onCreateChannel }) => {
  const [channelName, setChannelName] = useState('');
  const [channels, setChannels] = useState([]);

  const handleCreateChannel = () => {
    onCreateChannel(channelName);
    setChannels([...channels, channelName]);
    setChannelName('');
  };

  return (
    <div className="container">
      <h1>Create Channel</h1>
      <nav>
        <ul>
          <li><Link to="/home">В начало</Link></li>
        </ul>
      </nav>
      <div>
        <input
          type="text"
          placeholder="Channel Name"
          value={channelName}
          onChange={(e) => setChannelName(e.target.value)}
        />
        <button onClick={handleCreateChannel}>Create</button>
      </div>
      <ul>
        {channels.map((channel, index) => (
          <li key={index}>{channel}</li>
        ))}
      </ul>
    </div>
  );
};

export default CreateChannel;


