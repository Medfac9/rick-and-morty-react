import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import debounce from 'lodash/debounce';
import { getSearchTerm, setSearchTerm } from './searchSlice';
import ShowFilters from '../../components/ShowFilters';
import { loadCharacters } from '../allCharacters/allCharactersSlice';
import { getFilters } from '../filters/filtersSlice';
import { setPage } from '../page/pageSlice';

function Search() {
  const dispatch = useDispatch();
  const searchTerm = useSelector(getSearchTerm);
  const filters = useSelector(getFilters);

  // FIXME: loadCharacter
  const debouncedFilter = useCallback(debounce(() => dispatch(loadCharacters()), 500), []);

  const onSearchChangeHandler = (e) => {
    const { value } = e.target;

    dispatch(setSearchTerm(value));
    dispatch(setPage(1));
    debouncedFilter(value, filters);
  };

  return (
    <div className="input-group">
      <input
        id="search"
        className="form-control"
        type="search"
        value={searchTerm}
        onChange={onSearchChangeHandler}
        placeholder="Search character"
      />
      <ShowFilters />
    </div>
  );
}

export default Search;
