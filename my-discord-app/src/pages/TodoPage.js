
// src/pages/TodoPage.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    setTodos([...todos, newTodo]);
    setNewTodo('');
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <nav>
        <ul>
          <li><Link to="/home">В начало</Link></li>
        </ul>
      </nav>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoPage;



