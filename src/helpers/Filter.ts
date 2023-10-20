import { PokemonData } from "./PokemonData";

const Filter = (
  pokeData: PokemonData[],
  selectedType: string | null
): PokemonData[] => {
  return pokeData.filter((pokemon: PokemonData) => {
    if (selectedType === null) {
      return true;
    }

    return pokemon.data.types.some(
      (type: { type: { name: string } }) => type.type.name === selectedType
    );
  });
};

export default Filter;
