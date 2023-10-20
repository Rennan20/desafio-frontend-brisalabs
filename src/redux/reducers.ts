import { Reducer } from "redux";
import { ActionTypes } from "./actions";

export interface AppState {
  favoritedPokemons: string[];
}

const initialState: AppState = {
  favoritedPokemons: [],
};

const rootReducer: Reducer<AppState, ActionTypes> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      return {
        ...state,
        favoritedPokemons: [...state.favoritedPokemons, action.payload],
      };
    case "REMOVE_FROM_FAVORITES":
      return {
        ...state,
        favoritedPokemons: state.favoritedPokemons.filter(
          (name) => name !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default rootReducer;
