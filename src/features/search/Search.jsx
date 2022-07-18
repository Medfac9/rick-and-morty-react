import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchTerm, setSearchTerm } from './searchSlice';
import ShowFilters from '../../components/ShowFilters';
import { loadCharacters } from '../allCharacters/allCharactersSlice'
import { getFilters } from '../filters/filtersSlice';
import { useCallback } from 'react'
import debounce from 'lodash/debounce';
import { setPage } from '../page/pageSlice';


const Search = () => {
    const dispatch = useDispatch();
    const searchTerm = useSelector(getSearchTerm);
    const filters = useSelector(getFilters);

    const debouncedFilter = useCallback(debounce(() =>
        dispatch(loadCharacters()), 500), []
    )


    const onSearchChangeHandler = (e) => {
        const value = e.target.value;

        dispatch(setSearchTerm(value));
        dispatch(setPage(1));
        debouncedFilter(value, filters);
    };

    return (
        <div className='input-group'>
            <input
                id='search'
                className='form-control'
                type='search'
                value={searchTerm}
                onChange={onSearchChangeHandler}
                placeholder='Search character'
            />
            <ShowFilters />
        </div>
    );
};

export default Search;
