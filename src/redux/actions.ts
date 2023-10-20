export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";

export interface AddToFavoritesAction {
  type: typeof ADD_TO_FAVORITES;
  payload: string;
}

export interface RemoveFromFavoritesAction {
  type: typeof REMOVE_FROM_FAVORITES;
  payload: string;
}

export type ActionTypes = AddToFavoritesAction | RemoveFromFavoritesAction;

export const addToFavorites = (pokemonName: string): AddToFavoritesAction => ({
  type: ADD_TO_FAVORITES,
  payload: pokemonName,
});

export const removeFromFavorites = (
  pokemonName: string
): RemoveFromFavoritesAction => ({
  type: REMOVE_FROM_FAVORITES,
  payload: pokemonName,
});
