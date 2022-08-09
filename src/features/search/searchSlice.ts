import { createSlice } from '@reduxjs/toolkit';
import { StoreState } from '../../app/interface';

export const searchSlice = createSlice({
  name: 'search',
  initialState: '',
  reducers: {
    setSearchTerm: (_state, action) => (action.payload),
  },
});

export const { setSearchTerm } = searchSlice.actions;

export const getSearchTerm = (state: StoreState) => state.search;

export default searchSlice.reducer;
