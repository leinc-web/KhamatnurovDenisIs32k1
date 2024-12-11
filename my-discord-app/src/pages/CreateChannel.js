// src/pages/CreateChannel.js
import React, { useState } from 'react';
import '../styles.css';

const CreateChannel = ({ onCreateChannel }) => {
  const [channelName, setChannelName] = useState('');

  const handleCreateChannel = () => {
    onCreateChannel(channelName);
    setChannelName('');
  };

  return (
    <div className="container">
      <h1>Create Channel</h1>
      <div>
        <input
          type="text"
          placeholder="Channel Name"
          value={channelName}
          onChange={(e) => setChannelName(e.target.value)}
        />
        <button onClick={handleCreateChannel}>Create</button>
      </div>
    </div>
  );
};

export default CreateChannel;
