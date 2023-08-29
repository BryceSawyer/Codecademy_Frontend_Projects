import { createSlice } from '@reduxjs/toolkit';

const navigationSlice = createSlice({
  name: 'navigation',
  initialState: {
    navigationItems: [
      { id: 1, title: 'Home' },
      { id: 2, title: 'About' },
      { id: 3, title: 'Contact' },
    ],
    selectedNavigationItem: null,
  },
  reducers: {
    updateNavigation: (state, action) => {
      state.selectedNavigationItem = action.payload;
    },
  },
});

export const { updateNavigation } = navigationSlice.actions;

export default navigationSlice.reducer;