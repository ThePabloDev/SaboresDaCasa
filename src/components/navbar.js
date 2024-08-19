import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/" className="navbar-link">Receitas</Link>
        <h1 className="navbar-title">Sabores da Casa</h1>
        <Link to="/adicionar-receita" className="navbar-link">Adicionar Receita</Link>
      </div>
    </nav>
  );
};

export default Navbar;
