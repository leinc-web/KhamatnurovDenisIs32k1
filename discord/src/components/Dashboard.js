import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-page">
      <h2>Dashboard</h2>
      <p>Welcome to your dashboard. From here you can access your TODO list.</p>
      <button onClick={() => navigate('/todo')}>Go to TODO List</button>
    </div>
  );
}

export default Dashboard;
