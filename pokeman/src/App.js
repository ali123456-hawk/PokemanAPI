import React, { useState } from 'react';
import PokemonForm from './components/PokemonForm';
import PokemonDetails from './components/PokemonDetails';
import './App.css';

function App() {
  const [pokemonId, setPokemonId] = useState(null);

  return (
    <div className="app-container">
      <h1 className="app-title">Pokémon Finder</h1>
      <PokemonForm setPokemonId={setPokemonId} />
      {pokemonId && <PokemonDetails pokemonId={pokemonId} />}
    </div>
  );
}

export default App;
