// src/components/Receitas.js

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getReceitas } from '../API/receitasAPI';
import '../App.css';

const Receitas = () => {
  const { id } = useParams(); 
  const [receitas, setReceitas] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    async function fetchData() {
      const data = await getReceitas();
      setReceitas(data);
    }
    fetchData();
  }, []);

  const receita = receitas.find((rec) => rec.id === parseInt(id));

  if (!receita) return <div>Receita não encontrada</div>;

  return (
    <div className="receita-detalhes">
      <h1>{receita.titulo}</h1>
      <h3>Ingredientes:</h3>
      <ul>
        {receita.ingredientes.map((ing, index) => (
          <li key={index}>{ing}</li>
        ))}
      </ul>
      <h3>Modo de Preparo:</h3>
      <p>{receita.modo_de_preparo}</p>
      <button onClick={() => navigate(-1)}>Voltar</button>
    </div>
  );
};

export default Receitas;
