import { createSlice } from '@reduxjs/toolkit';
import { StoreState } from '../../app/interface';

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    status: null,
    specie: null,
    gender: null,
  },
  reducers: {
    setFilters: (_state, action) => (action.payload),
  },
});

export const { setFilters } = filtersSlice.actions;

export const getFilters = (state: StoreState) => state.filters;

export default filtersSlice.reducer;
