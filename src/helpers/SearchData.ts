import { useEffect, useState } from "react";
import axios from "axios";
import { PokemonData } from "./PokemonData";

const SearchData = () => {
  const [pokeData, setPokeData] = useState<PokemonData[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const endpoints = [];
    for (let i = 1; i <= 20; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    try {
      const responses = await Promise.all(
        endpoints.map((endpoint) => axios.get(endpoint))
      );

      const pokemonDataArray = responses.map((response) => ({
        data: response.data,
        id: response.data.id,
        name: response.data.name,
        type: response.data.types,
        sprites: response.data.sprites,
      }));

      setPokeData(pokemonDataArray);
      console.log("Data loaded successfully:", pokemonDataArray);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return pokeData;
};

export default SearchData;
