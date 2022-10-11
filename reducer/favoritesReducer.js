//import { v4 as uuidv4 } from 'uuid';

export const initialState = {
  favorites: []
};

export const favoritesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return {
        favorites: [...state.favorites, action.payload.favorite]
      }
    case 'REMOVE_FAVORITE':
      return {
        favorites: state.favorites.filter(({ id }) => id !== action.payload.id)
      }
    default:
      return state;
  }
};