import {
  Main,
  SearchBar,
  ResultsContainer,
  CardContainer,
} from "./SearchStyles";
import { useState } from "react";
import { PokemonData } from "../../helpers/PokemonData";
import PokemonCard from "../pokemoncard/PokemonCard";
import SearchData from "../../helpers/SearchData";

const MainContainer = () => {
  const pokeData = SearchData();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPokeData, setFilteredPokeData] = useState<PokemonData[]>([]);

  const handleSearch = (name: string) => {
    setSearchTerm(name); // Atualize o searchTerm com o nome pesquisado

    if (name.trim() === "") {
      setFilteredPokeData([]);
    } else {
      const filteredResults = pokeData.filter((pokemon) =>
        pokemon.name.includes(name)
      );
      setFilteredPokeData(filteredResults);
    }
  };

  return (
    <>
      <Main>
        <SearchBar>
          <input
            type="text"
            placeholder="Procure por pokémons"
            onChange={(e) => {
              setSearchTerm(e.target.value);
              handleSearch(e.target.value);
            }}
          />
        </SearchBar>
        <ResultsContainer>
          {filteredPokeData.map((pokemon) => (
            <CardContainer key={pokemon.id}>
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            </CardContainer>
          ))}
        </ResultsContainer>
      </Main>
    </>
  );
};

export default MainContainer;
