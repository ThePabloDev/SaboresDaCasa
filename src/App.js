import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AdicionarReceita from './components/AdicionarReceita';
import Receitas from './components/Receitas';
import Navbar from './components/navbar';
import Footer from './components/footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adicionar-receita" element={<AdicionarReceita />} />
        <Route path="/receita/:id" element={<Receitas />} />
      </Routes>""
    </Router>
  );
};

export default App;
