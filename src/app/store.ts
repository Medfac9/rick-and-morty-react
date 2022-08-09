import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import allCharactersReducer from '../features/allCharacters/allCharactersSlice';
import searchReducer from '../features/search/searchSlice';
import filtersReducer from '../features/filters/filtersSlice';
import pageReducer from '../features/page/pageSlice';

export default configureStore({
  reducer: {
    allCharacters: allCharactersReducer,
    search: searchReducer,
    filters: filtersReducer,
    page: pageReducer,
  },
  middleware: [thunkMiddleware],
});
