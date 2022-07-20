import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createUrl } from '../../utils';
import { CharacterState } from './interface';
import { StoreState } from '../../app/interface';

// FIXME: loadCharacter
// eslint-disable-next-line no-underscore-dangle
export const loadCharacters = createAsyncThunk(
  'allCharacters/getAllCharacters',

  async (url: string, thunk) => {
    let charactersUrl = url;
    if (url === undefined) {
      const state: Partial<StoreState> = thunk.getState();

      const { page, search, filters } = state;

      charactersUrl = createUrl(page, search, filters);
    }

    const response = await axios.get(charactersUrl);

    return response.data;
  },
);

// export const loadCharacters = (url = '') => _loadCharacters(url);

const initialState = {
  characters: [],
  info: [],
  isLoading: false,
  hasError: false,
} as CharacterState;

const sliceOptions = {
  name: 'allCharacters',
  initialState,
  reducers: {},
  extraReducers: {
    [loadCharacters.pending.type]: (state: CharacterState, _action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [loadCharacters.rejected.type]: (state: CharacterState, _action) => {
      state.isLoading = false;
      state.hasError = true;
    },
    [loadCharacters.fulfilled.type]: (state: CharacterState, action) => {
      state.characters = action.payload.results;
      state.info = action.payload.info;
      state.isLoading = false;
      state.hasError = false;
    },
  },
};

export const allCharactersSlice = createSlice(sliceOptions);

export const gettAllCharacters = (state: StoreState) => state.allCharacters.characters;

export default allCharactersSlice.reducer;
