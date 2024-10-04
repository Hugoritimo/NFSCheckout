"use client"; // Adicione esta linha no topo do arquivo

import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [text, setText] = useState('');
  const [formattedData, setFormattedData] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/formatdata', { text });
      setFormattedData(response.data.formattedData);
    } catch (error) {
      console.error('Error formatting data:', error);
    }
  };

  return (
    <div>
      <h1>Formatar Dados de RF</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows="10"
          cols="50"
        />
        <br>
        <button type="submit">Formatar</button>
        </br>
      </form>
      {formattedData && (
        <div>
          <h2>Dados Formatados</h2>
      <pre>{formattedData}</pre>
        </div>
      )}
    </div>
  );
}
