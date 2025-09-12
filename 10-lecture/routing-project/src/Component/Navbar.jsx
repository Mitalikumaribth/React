import React from 'react'
import Home from './Home';
import About from './About';
import Dashboard from './Dashboard';
import { Link,NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

  return (
    <div>
        <ul>
        <li>
            <NavLink to="/"  className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
            Home
            </NavLink>
        </li>
        <li>
            <NavLink to="/About" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
            About
            </NavLink>
        </li>
        <li>
            <NavLink to="/Dashboard" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
            Dashboard
            </NavLink>
        </li>
        </ul>   
    </div>
  )
}

export default Navbar;