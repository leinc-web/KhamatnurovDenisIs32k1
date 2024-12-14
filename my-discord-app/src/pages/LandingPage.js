// src/pages/LandingPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const LandingPage = () => {
  return (
    <div className="container">
      <h1>Добро пожаловать в наше приложение, вдохновленное Discord!</h1>
      <p>Здесь вы можете создавать серверы, каналы и управлять задачами.</p>
      <Link to="/auth">
        <button>Перейти к регистрации/входу</button>
      </Link>
    </div>
  );
};

export default LandingPage;

