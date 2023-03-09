import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { iFilterSliceState, tSort } from './types';

const initialState: iFilterSliceState = {
  categoryId: 0,
  sortType: {
    name: 'сначала популярные',
    sortProperty: 'rating',
  },
  currentPage: 1,
  searchValue: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setSortType(state, action: PayloadAction<tSort>) {
      state.sortType = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export const selectFilter = (state: RootState) => state.filter;
export const { setCategoryId, setSortType, setCurrentPage, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
