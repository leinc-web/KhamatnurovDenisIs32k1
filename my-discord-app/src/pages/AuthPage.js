


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

const AuthPage = () => {
  const [isRegistering, setIsRegistering] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    fetch('http://localhost:5000/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.token) {
          localStorage.setItem('token', data.token);
          navigate('/home');
        } else {
          console.error('Registration failed:', data.message);
        }
      })
      .catch(error => console.error('Error:', error));
  };

  const handleLogin = () => {
    fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.token) {
          localStorage.setItem('token', data.token);
          navigate('/home');
        } else {
          console.error('Login failed:', data.message);
        }
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <div className="container">
      <h1>{isRegistering ? 'Регистрация' : 'Вход'}</h1>
      {isRegistering && (
        <input
          type="text"
          placeholder="Имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      )}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="button-group">
        {isRegistering ? (
          <button onClick={handleRegister}>Зарегистрироваться</button>
        ) : (
          <button onClick={handleLogin}>Войти</button>
        )}
        <button onClick={() => setIsRegistering(!isRegistering)}>
          {isRegistering ? 'Перейти к входу' : 'Перейти к регистрации'}
        </button>
      </div>
    </div>
  );
};

export default AuthPage;


