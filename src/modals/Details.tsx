import React, { useState } from "react";
import { connect } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../redux/actions";
import { PokemonData } from "../helpers/PokemonData";
import {
  CloseBtn,
  FavoriteBtn,
  HR,
  ImageContainer,
  ImagesContainer,
  ModalBackdrop,
  ModalContainer,
  PokemonHeight,
  PokemonImage,
  PokemonName,
  PokemonType,
  PokemonWeight,
  PrimaryInfoContainer,
  StatsContainer,
  StatsTitle,
  SvgWrapper,
  Title,
} from "./DetailsStyles";
import StatsBar from "./StatsBar";
import { AppState } from "../redux/reducers";

interface DetailsProps {
  pokemon: PokemonData;
  onClose: () => void;
  favoritedPokemons: string[];
  addToFavorites: (pokemonName: string) => void;
  removeFromFavorites: (pokemonName: string) => void;
}

const Details: React.FC<DetailsProps> = ({
  pokemon,
  onClose,
  favoritedPokemons,
  addToFavorites,
  removeFromFavorites,
}) => {
  const [isFavorite, setIsFavorite] = useState(
    favoritedPokemons.includes(pokemon.name)
  );

  const toggleFavorite = () => {
    if (isFavorite) {
      setIsFavorite(false);
      removeFromFavorites(pokemon.name);
    } else {
      setIsFavorite(true);
      addToFavorites(pokemon.name);
    }
  };

  const unformattedHeight = pokemon.data.height;
  const formattedHeight = unformattedHeight / 10;

  return (
    <ModalBackdrop>
      <ModalContainer>
        <Title>Detalhes</Title>
        <CloseBtn onClick={onClose}>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1.5 1.5L13.5 13.5M1.5 13.5L13.5 1.5" stroke="#343232" />
          </svg>
        </CloseBtn>
        <HR />
        <PokemonName>{pokemon.name}</PokemonName>
        <ImagesContainer>
          <ImageContainer>
            <PokemonImage
              src={pokemon.data.sprites.front_default}
              alt={pokemon.name}
            />
          </ImageContainer>
          <ImageContainer>
            <PokemonImage
              src={pokemon.data.sprites.back_default}
              alt={pokemon.name}
            />
          </ImageContainer>
        </ImagesContainer>
        <PrimaryInfoContainer>
          <PokemonHeight>{formattedHeight}m</PokemonHeight>
          <PokemonWeight>{pokemon.data.weight}Kg</PokemonWeight>
        </PrimaryInfoContainer>
        <PokemonType>{pokemon.data.types[0].type.name}</PokemonType>
        <StatsContainer>
          <StatsTitle>Estatísticas</StatsTitle>
          <StatsBar
            name="HP"
            value={pokemon.data.stats[0].base_stat}
            maxValue={255}
            width={(pokemon.data.stats[0].base_stat / 255) * 244}
          />
          <StatsBar
            name="ATK"
            value={pokemon.data.stats[1].base_stat}
            maxValue={190}
            width={(pokemon.data.stats[1].base_stat / 255) * 244}
          />
          <StatsBar
            name="DEF"
            value={pokemon.data.stats[2].base_stat}
            maxValue={250}
            width={(pokemon.data.stats[2].base_stat / 255) * 244}
          />
          <StatsBar
            name="S.ATK"
            value={pokemon.data.stats[2].base_stat}
            maxValue={250}
            width={(pokemon.data.stats[3].base_stat / 255) * 244}
          />
          <StatsBar
            name="S.DEF"
            value={pokemon.data.stats[2].base_stat}
            maxValue={250}
            width={(pokemon.data.stats[4].base_stat / 255) * 244}
          />
          <StatsBar
            name="SPD"
            value={pokemon.data.stats[2].base_stat}
            maxValue={250}
            width={(pokemon.data.stats[5].base_stat / 255) * 244}
          />
        </StatsContainer>
        <FavoriteBtn onClick={toggleFavorite} isFavorite={isFavorite}>
          {isFavorite ? null : (
            <SvgWrapper>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 14.5L12.1877 14.8904C12.3377 15.0105 12.5434 15.0339 12.7166 14.9507C12.8898 14.8674 13 14.6922 13 14.5H12.5ZM12.5 0.500011H13V1.10865e-05L12.5 1.05798e-05L12.5 0.500011ZM2.5 0.5L2.5 0L2 -5.36442e-07V0.5H2.5ZM2.5 14.5H2C2 14.6922 2.11017 14.8674 2.28341 14.9507C2.45664 15.0339 2.66226 15.0105 2.81235 14.8904L2.5 14.5ZM7.5 10.5L7.81235 10.1096C7.62974 9.96349 7.37026 9.96349 7.18765 10.1096L7.5 10.5ZM13 14.5V0.500011H12V14.5H13ZM2 0.5V14.5H3V0.5H2ZM2.81235 14.8904L7.81235 10.8904L7.18765 10.1096L2.18765 14.1096L2.81235 14.8904ZM7.18765 10.8904L12.1877 14.8904L12.8123 14.1096L7.81235 10.1096L7.18765 10.8904ZM12.5 1.05798e-05L2.5 0L2.5 1L12.5 1.00001L12.5 1.05798e-05Z"
                  fill="#343232"
                />
              </svg>
            </SvgWrapper>
          )}
          {isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
        </FavoriteBtn>
      </ModalContainer>
    </ModalBackdrop>
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

export default connect(mapStateToProps, mapDispatchToProps)(Details);
