//import { v4 as uuidv4 } from 'uuid';
import { types } from '../constants/types';

export const initialState = {
  favorites: []
};

export const favoritesReducer = (state, action) => {
  switch (action.type) {
    case types.ADD_FAVORITE_ITEM:
      return {
        favorites: [...state.favorites, action.payload.favorite]
      }
    case types.REMOVE_FAVORITE_ITEM:
      return {
        favorites: state.favorites.filter(({ id }) => id !== action.payload.id)
      }
    default:
      return state;
  }
};