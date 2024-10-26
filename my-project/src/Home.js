import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className="App">
      <header className="App-header">
      <img src="/logo192.png" className="App-logo" alt="logo" />
        <h1>Welcome to My App</h1>
        <p>Simple, clean, and modern design inspired by Discord.</p>
        <Link to="/login">
          <button className="login-button">Вход</button>
        </Link>
      </header>
    </div>
  );
}

export default Home;
