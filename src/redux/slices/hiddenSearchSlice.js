import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showSearch: false,
};

const showSearchSlice = createSlice({
  name: 'show',
  initialState,
  reducers: {
    setShowSearch(state, action) {
      state.showSearch = action.payload;
    },
  },
});

export const { setShowSearch } = showSearchSlice.actions;

export default showSearchSlice.reducer;
