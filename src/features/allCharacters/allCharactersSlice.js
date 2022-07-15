import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const loadCharacters = createAsyncThunk(
    'allCharacters/getAllCharacters',
    
    async (filters={}) => {
        let url = '';

        // Si me viene una url, directamente pido la petición  dicha url
        if(filters.url){
            url = filters.url;
        }
        // Sino calculo yo la url
        else{
            url = 'https://rickandmortyapi.com/api/character/';
            // Para iniciar los parametros, si no se mete el primer query cambiara a ?
            let symbol = '&';
    
            // Si me viene un nombre es lo primero que se añade a la petición de la api
            if(filters.name){
                url += '?name=' + filters.name;
            }
            else{
                symbol = '?';
            }
            
            // Filtro por los filtros que me vengan
            if(filters.filters){
                let url_filters = '';
                let status = '';
                let gender = '';
                
                // Si viene algo distinto a all filtro por el
                if(filters.filters['status'] !== 'status-all'){
                    // Si viene con status- es para diferenciarlo del gender-unknown
                    if(filters.filters['status'] === 'status-unknown'){
                        status = 'unknown'
                    }
                    else{
                        status = filters.filters['status']
                    }
    
                    url_filters += symbol + 'status=' + status;
                    symbol = '&';
                }
    
                if(filters.filters['specie'] !== 'specie-all'){
                    url_filters += symbol + 'species=' + filters.filters['specie'];
                    symbol = '&';
                }
    
                if(filters.filters['gender'] !== 'gender-all'){
                    if(filters.filters['gender'] === 'gender-unknown'){
                        gender = 'unknown'
                    }
                    else{
                        gender = filters.filters['gender']
                    }
    
                    url_filters += symbol + 'gender=' + gender;
                }
    
                url += url_filters;
            }
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
