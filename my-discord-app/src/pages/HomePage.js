
// src/pages/HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const HomePage = () => {
  return (
    <div className="container">
      <h1>Добро пожаловать на домашнюю страницу!</h1>
      <nav>
        <ul>
          <li><Link to="/create-channel">Создать канал</Link></li>
          <li><Link to="/create-server">Создать сервер</Link></li>
          <li><Link to="/todo">Список дел</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;

