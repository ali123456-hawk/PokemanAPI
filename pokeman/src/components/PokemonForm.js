import React, { useState } from 'react';
import './PokemonForm.css';

function PokemonForm({ setPokemonId }) {
  const [inputId, setInputId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputId) {
      setPokemonId(inputId);
      setInputId('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="pokemon-form">
      <label>Enter Pokémon ID:</label>
      <input
        type="text"
        value={inputId}
        onChange={(e) => setInputId(e.target.value)}
        placeholder="e.g., 1 for Bulbasaur"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default PokemonForm;
