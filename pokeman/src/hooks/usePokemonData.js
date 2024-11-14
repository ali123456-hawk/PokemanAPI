import { useState, useEffect } from 'react';
import axios from 'axios';

function usePokemonData(pokemonId) {
  const [pokemonData, setPokemonData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!pokemonId) return;

    const fetchPokemonData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        setPokemonData(response.data);
      } catch (err) {
        setError("Failed to fetch Pokémon data.");
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonData();
  }, [pokemonId]);

  return { pokemonData, loading, error };
}

export default usePokemonData;
