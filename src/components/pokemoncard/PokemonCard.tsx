import React, { useState } from "react";
import {
  CardContainer,
  Name,
  ID,
  TypeDiv,
  ViewDetailsBtn,
  Type,
  HeartIcon,
  PokemonImage,
} from "./PokemonCardSyles";
import Details from "../../modals/Details";
import SearchData from "../../helpers/SearchData";
import { connect } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../../redux/actions";
import { AppState } from "../../redux/reducers";
import { PokemonData } from "./PokemonData";

interface PokemonCardProps {
  pokemon: PokemonData;
  favoritedPokemons: string[];
  addToFavorites: (pokemonName: string) => void;
  removeFromFavorites: (pokemonName: string) => void;
}

const PokemonCard: React.FC<PokemonCardProps> = ({
  pokemon,
  favoritedPokemons,
  addToFavorites,
  removeFromFavorites,
}) => {
  const isFavorite = favoritedPokemons.includes(pokemon.name);
  const pokeData = SearchData();

  const [selectedPokemon, setSelectedPokemon] = useState<PokemonData | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (pokemon: PokemonData) => {
    setSelectedPokemon(pokemon);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPokemon(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <CardContainer>
        <HeartIcon>
          <svg
            width="28"
            height="28"
            viewBox="0 0 30 28"
            fill={isFavorite ? "red" : "none"}
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => {
              isFavorite
                ? removeFromFavorites(pokemon.name)
                : addToFavorites(pokemon.name);
            }}
          >
            <path
              d="M3.86634 14.0664L15 25.2L26.1337 14.0664C27.3714 12.8287 28.0667 11.1501 28.0667 9.39971C28.0667 5.75482 25.1119 2.80005 21.467 2.80005C19.7167 2.80005 18.038 3.49537 16.8004 4.73304L15 6.53338L13.1997 4.73305C11.962 3.49537 10.2834 2.80005 8.53301 2.80005C4.88812 2.80005 1.93335 5.75482 1.93335 9.39971C1.93335 11.1501 2.62867 12.8287 3.86634 14.0664Z"
              stroke={isFavorite ? "none" : "#6C6868"}
              stroke-width="2"
              stroke-linejoin="round"
            />
          </svg>
        </HeartIcon>
        <PokemonImage
          src={pokemon.data.sprites.front_default}
          alt={pokemon.name}
        />

        <Name>{pokemon.name}</Name>
        <ID>ID: {pokemon.id}</ID>
        <TypeDiv typeColor={pokemon.data.types[0].type.name}>
          <Type>{pokemon.data.types[0].type.name}</Type>
        </TypeDiv>

        <ViewDetailsBtn onClick={() => openModal(pokemon)}>
          <p> Ver Detalhes</p>
        </ViewDetailsBtn>
      </CardContainer>
      {isModalOpen && selectedPokemon && (
        <Details pokemon={selectedPokemon} onClose={closeModal} />
      )}
    </>
  );
};

const mapStateToProps = (state: AppState) => {
  return {
    favoritedPokemons: state.favoritedPokemons,
  };
};

const mapDispatchToProps = {
  addToFavorites,
  removeFromFavorites,
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonCard);
