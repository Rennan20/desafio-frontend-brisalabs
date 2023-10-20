import MainContainer from "../../components/search/MainContainer";
import ThemeBtn from "../../components/changetheme/ThemeBtn";
import Header from "../../components/header/Header";
import { useState } from "react";
import { PokemonData } from "../../helpers/PokemonData";

const Search = () => {
  return (
    <>
      <Header />
      <MainContainer />
    </>
  );
};

export default Search;
