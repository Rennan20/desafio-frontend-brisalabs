import React from "react";
import ContentContainer from "./ContentContainer";
import PokemonCard from "../pokemoncard/PokemonCard";
import { Main, Image, FavoritesContainer } from "./HomeStyles";
import SearchData from "../../helpers/SearchData";
import { AppState } from "../../redux/reducers";
import { connect } from "react-redux";

interface MainContainerProps {
  favoritedPokemons: string[];
}

const MainContainer: React.FC<MainContainerProps> = ({ favoritedPokemons }) => {
  const pokeData = SearchData();

  const favoritedPokemonData = pokeData.filter((pokemon) =>
    favoritedPokemons.includes(pokemon.name)
  );

  return (
    <>
      <Main>
        {favoritedPokemonData.length === 0 && (
          <Image src="/assets/Astronaut-pana 1.png" alt="Astronaut" />
        )}

        <FavoritesContainer>
          {favoritedPokemonData.length > 0
            ? favoritedPokemonData.map((pokemon) => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
              ))
            : null}
        </FavoritesContainer>

        {favoritedPokemonData.length === 0 && <ContentContainer />}
      </Main>
    </>
  );
};

const mapStateToProps = (state: AppState) => {
  return {
    favoritedPokemons: state.favoritedPokemons,
  };
};

export default connect(mapStateToProps)(MainContainer);
