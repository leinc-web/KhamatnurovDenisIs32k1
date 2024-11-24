import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <h1>Welcome to Discord </h1>
      <p>Discord is a voice, video, and text communication service.</p>
      <button onClick={() => navigate('/register')}>Get Started</button>
    </div>
  );
}

export default Home;
