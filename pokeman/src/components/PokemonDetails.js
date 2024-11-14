import React from 'react';
import usePokemonData from '../hooks/usePokemonData';
import './PokemonDetails.css';

function PokemonDetails({ pokemonId }) {
  const { pokemonData, loading, error } = usePokemonData(pokemonId);

  if (loading) return <p className="loading">Loading Pokémon data...</p>;
  if (error) return <p className="error">{error}</p>;
  if (!pokemonData) return null;

  return (
    <div className="pokemon-card">
      <h2>{pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)}</h2>
      <div className="sprites">
        <img src={pokemonData.sprites.front_default} alt="Front Default" />
        <img src={pokemonData.sprites.back_default} alt="Back Default" />
        <img src={pokemonData.sprites.front_shiny} alt="Front Shiny" />
      </div>
      <h3>Moves:</h3>
      <ul className="moves-list">
        {pokemonData.moves.slice(0, 3).map((move, index) => (
          <li key={index}>{move.move.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonDetails;
