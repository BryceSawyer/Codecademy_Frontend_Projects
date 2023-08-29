import { configureStore } from '@reduxjs/toolkit';
import navigationReducer from '../reducers/navigationSlice';
import searchReducer from '../reducers/searchSlice';

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    search: searchReducer,
  },
});
