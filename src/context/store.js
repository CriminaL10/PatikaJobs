import {configureStore} from '@reduxjs/toolkit';
import favoritesReducer from './favoritesSlice';
import submitReducer from './submitJobSlice';

const store = configureStore({
  reducer: {
    favorite: favoritesReducer,
    submit: submitReducer,
  },
});

export default store;
