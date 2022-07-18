import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPage, setPage, increment, decrement } from './pageSlice';
import Pagination from 'react-bootstrap/Pagination'
import PageItem from 'react-bootstrap/PageItem'
import { loadCharacters } from '../allCharacters/allCharactersSlice'

export default function Pager({ info }){
    const [pageArray, setPageArray] = useState([]);
    const currentPage = useSelector(getPage);
    const { next, prev, pages: lastPage } = info;

    const dispatch = useDispatch();

    const onNextPageClickHandler = (_e) => {
        dispatch(increment());
        dispatch(loadCharacters(next));
    };

    const onPrevPageClickHandler = (_e) => {
        dispatch(decrement());
        dispatch(loadCharacters(prev));
    };

    const onLastPageClickHandler = (_e) => {
        dispatch(setPage(lastPage));
        dispatch(loadCharacters());
    };

    const onFirstPageClickHandler = (_e) => {
        dispatch(setPage(1));
        dispatch(loadCharacters());
    };
    
    useEffect(() => {
        const prevDisable = prev === null ? 'disabled' : '';
        const nextDisable = next === null ? 'disabled' : '';
        const items = [];

        items.push(<Pagination.First disabled={prevDisable} key='first' onClick={onFirstPageClickHandler}/>)
        items.push(<Pagination.Prev disabled={prevDisable} key='prev' onClick={onPrevPageClickHandler}/>)
        items.push(<PageItem id={currentPage} key={currentPage} active>{currentPage}</PageItem>)
        items.push(<Pagination.Next disabled={nextDisable} key='next' onClick={onNextPageClickHandler}/>)
        items.push(<Pagination.Last disabled={nextDisable} id={ lastPage } key='last' onClick={onLastPageClickHandler}/>)
        
        setPageArray(items);
    }, []);
  
    return (
        <Pagination className='justify-content-center'>
            {pageArray}
        </Pagination>
    );
}