import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSearchTerm, setSearchTerm } from './searchSlice';
import ShowFilters from '../../components/ShowFilters';
import { loadCharacters } from '../allCharacters/allCharactersSlice'
import { selectFilters } from '../filters/filtersSlice';
import { useCallback } from 'react'
import debounce from 'lodash/debounce';

const Search = () => {
    const dispatch = useDispatch();
    const searchTerm = useSelector(selectSearchTerm);
    const filters = useSelector(selectFilters);

    const debouncedFilter = useCallback(debounce((term, filter) =>
        dispatch(loadCharacters({name: term, filters: filter})), 500), []
    )


    const onSearchChangeHandler = (e) => {
        const value = e.target.value;

        dispatch(setSearchTerm(value));
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
