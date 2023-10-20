import { createContext, useContext, useState, ReactNode } from "react";
import { ContextType, PokemonData } from "./ContextType";

const defaultValue: ContextType = {
  pokeData: [],
  setPokeData: () => {},
};

const PokeAPIContext = createContext(defaultValue);

const PokeAPIProvider = ({ children }: { children: ReactNode }) => {
  const [pokeData, setPokeData] = useState<PokemonData[]>([]);

  return (
    <PokeAPIContext.Provider value={{ pokeData, setPokeData }}>
      {children}
    </PokeAPIContext.Provider>
  );
};

const usePokeAPI = () => {
  return useContext(PokeAPIContext);
};

export { PokeAPIProvider, usePokeAPI, PokeAPIContext };
