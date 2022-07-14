import React from 'react';
import Pagination from 'react-bootstrap/Pagination'
import { useDispatch } from 'react-redux';
import { loadCharacters } from '../features/allCharacters/allCharactersSlice'
import PageItem from 'react-bootstrap/PageItem'

export default function Pager(info) {

    // TODO: MISMO PROBLEMA QUE CON CHARACTERS => info.info

    const prevDisable = info.info.prev === null ? 'disabled' : '';
    const nextDisable = info.info.next === null ? 'disabled' : '';
    const dispatch = useDispatch();

    const onPageClickHandler = (e) => {
        const url = e.target.id === 'next' ? info.info.next : info.info.prev;

        // FIXED
        // e.target.id === 'next' ? url = info.info.next : url = info.info.prev;
        dispatch(loadCharacters({ url }));
    };

    return (
        <Pagination className='justify-content-center'>
            <Pagination.Prev disabled={prevDisable} key='prev' id='prev' onClick={onPageClickHandler}/>
            <PageItem active key='1' id='1'>1</PageItem>
            <Pagination.Next disabled={nextDisable} key='next' id='next' onClick={onPageClickHandler}/>
        </Pagination>
    )
}