import { createSlice } from '@reduxjs/toolkit';
import { StoreState } from '../../app/interface';

export const pageSlice = createSlice({
  name: 'page',
  initialState: 1,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
    setPage: (_state, action) => (action.payload),
  },
});

export const { setPage, increment, decrement } = pageSlice.actions;

export const getPage = (state: StoreState) => state.page;

export default pageSlice.reducer;
