import { createSlice } from '@reduxjs/toolkit';


export const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        'status': null,
        'specie': null,
        'gender': null
    },
    reducers: {
        setFilters: (_state, action) => (action.payload)
    },
});

export const { setFilters } = filtersSlice.actions;

export const selectFilters = (state) => state.filters;

export default filtersSlice.reducer;
