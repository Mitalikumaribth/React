import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/about');
  }

  return (
    <div>Dashboard
      <Outlet />
      <button onClick={handleClick}>Move to Dashboard page</button>
    </div>
  )
}

export default Dashboard;