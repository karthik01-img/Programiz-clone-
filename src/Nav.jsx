import React from 'react';
import './Nav.css';
import { useNavigate } from 'react-router-dom';

function Nav() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="nav-logo" onClick={() => navigate('/')}>
        Programiz
      </div>

      <div className="nav-links">
        <span onClick={() => navigate('/')} className="nav-item">Tutorials</span>
        <span onClick={() => navigate('/Examples')} className="nav-item">Examples</span>
        <span onClick={() => navigate('/Courses')} className="nav-item">Courses</span>
        <input
          type="text"
          placeholder="🔍  Search"
          className="nav-search"
        />
        <button className="nav-login-btn" onClick={() => navigate('/Login')}>
          Login to Pro
        </button>
      </div>
    </nav>
  );
}

export default Nav;
