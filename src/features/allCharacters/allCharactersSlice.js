import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createUrl } from '../../utils';

export const loadCharacters = createAsyncThunk(
    'allCharacters/getAllCharacters',
    
    async (url, thunk) => {

        if (url === undefined){
            const state = thunk.getState()
        
            const page = state.page;
            const term = state.search;
            const filters = state.filters;

            url = createUrl(page, term, filters);
        }

        const response = await axios.get(url);

        return response.data;
    }
);

const sliceOptions = {
    name: 'allCharacters',
    initialState: {
        characters: [],
        info: [],
        isLoading: false,
    },
    reducers: {},
    extraReducers: {
        [loadCharacters.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadCharacters.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        },
        [loadCharacters.fulfilled]: (state, action) => {
            state.characters = action.payload.results;
            state.info = action.payload.info;
            state.isLoading = false;
            state.hasError = false;
        }
    }
}

export const allCharactersSlice = createSlice(sliceOptions);

export const selectAllCharacters = (state) => state.allCharacters.characters;

export default allCharactersSlice.reducer;
