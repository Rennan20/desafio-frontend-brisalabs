import { Dispatch, SetStateAction } from "react";

export type PokemonData = {
  id: number;
  name: string;
  type: string;
};

export interface ContextType {
  pokeData: PokemonData[];
  setPokeData: Dispatch<SetStateAction<PokemonData[]>>;
}
