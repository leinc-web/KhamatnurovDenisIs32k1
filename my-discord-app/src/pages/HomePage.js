// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const HomePage = () => {
  return (
    <div className="container">
      <h1>Welcome to the Discord-themed App</h1>
      <nav>
        <ul>
          <li><Link to="/todo">Todo List</Link></li>
          <li><Link to="/create-server">Create Server</Link></li>
          <li><Link to="/create-channel">Create Channel</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;
