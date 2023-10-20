import { Main, CardGrid } from "./ShowAllStyles";
import PokemonCard from "../pokemoncard/PokemonCard";
import Navigation from "./Navigation";
import SearchData from "../../helpers/SearchData";
import Filter from "../../helpers/Filter"; // Importe a função Filter diretamente
import { useState } from "react";

const MainContainer = () => {
  const pokeData = SearchData();
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const filteredData = Filter(pokeData, selectedType); // Passe selectedType diretamente aqui

  return (
    <Main>
      <Navigation setSelectedType={setSelectedType} />
      <CardGrid>
        {filteredData.map((pokemon, index) => (
          <PokemonCard key={index} pokemon={pokemon} />
        ))}
      </CardGrid>
    </Main>
  );
};

export default MainContainer;
