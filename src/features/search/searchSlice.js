import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
    name: 'search',
    initialState: '',
    reducers: {
        setSearchTerm: (_state, action) => (action.payload)
    },
});

export const { setSearchTerm } = searchSlice.actions;

export const getSearchTerm = (state) => state.search;

export default searchSlice.reducer;
