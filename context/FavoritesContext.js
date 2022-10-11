import React, { createContext, useContext, useReducer } from 'react';
import { favoritesReducer, initialState } from '../reducer/favoritesReducer';

const FavoritesStateContext = createContext();
const FavoritesDispatchContext = createContext();

export const useFavoritesState = () => {
  const context = useContext(FavoritesStateContext);
  if (!context) {
    throw new Error('useFavoritesState must be used in FavoritesStateContext')
  }
  return context;
};

export const useFavoritesDispatch = () => {
  const context = useContext(FavoritesDispatchContext);
  if (!context) {
    throw new Error('useFavoritesDispatch must be used in useFavoritesDispatch')
  }
  return context;
};

export const FavoritesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(favoritesReducer, initialState);
  return (
    <FavoritesStateContext.Provider value={state}>
      <FavoritesDispatchContext.Provider value={dispatch}>
        {children}
      </FavoritesDispatchContext.Provider>
    </FavoritesStateContext.Provider>
  )
};