import { createSlice } from '@reduxjs/toolkit';

export const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        'status': 'status-all',
        'specie': 'specie-all',
        'gender': 'gender-all'
    },
    reducers: {
        // TODO: DO NOT MUTATE STATE!!
        setFilters: (state, action) => ({
            ...state,
            filters: action.payload
        })
    },
});

export const { setFilters } = filtersSlice.actions;

export const selectFilters = (state) => state.filters;

export default filtersSlice.reducer;
