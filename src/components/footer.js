import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <Link to="/" className="footer-link">Receitas</Link>
        <h1 className="footer-title">Todos os direitos reservados (c)</h1>
        <Link to="/adicionar-receita" className="footer-link">Adicionar Receita</Link>
      </div>
    </footer>
  );
};

export default Footer;
