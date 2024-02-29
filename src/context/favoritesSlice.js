import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  favList: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favList = state.favList.concat(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favList = state.favList.filter(item => item.id !== action.payload);
    },
  },
});
export const {addFavorite, removeFavorite} = favoritesSlice.actions;
export default favoritesSlice.reducer;
