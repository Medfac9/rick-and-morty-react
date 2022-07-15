import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPage, setPage, increment, decrement } from './pageSlice';
import Pagination from 'react-bootstrap/Pagination'
import PageItem from 'react-bootstrap/PageItem'
import { loadCharacters } from '../allCharacters/allCharactersSlice'

export default function MyPagination({ info }){
    const [pageArray, setPageArray] = useState([]);
    var currentPage = useSelector(selectPage);

    const prevDisable = info.prev === null ? 'disabled' : '';
    const nextDisable = info.next === null ? 'disabled' : '';

    const dispatch = useDispatch();
    
    const onNextPageClickHandler = (_e) => {
        let url = info.next;

        dispatch(increment());
        dispatch(loadCharacters({ url }));
    };

    const onPrevPageClickHandler = (_e) => {
        let url = info.prev;

        dispatch(decrement());
        dispatch(loadCharacters({url }));
    };

    // const onPageClickHandler = (e) => {
    //     let url = '';
        
    //     if (e.target.id === 'next'){
    //         url = info.next
    //         dispatch(increment());
    //     }
    //     else{
    //         url = info.prev;
    //         dispatch(decrement());
    //     }

    //     dispatch(loadCharacters({ url }));
    // };

    const onNumberPageClickHandler = (e) => {
        let new_page = parseInt(e.target.getAttribute('id'));

        if(currentPage === new_page){
            return;
        };

        let url = info.prev === null ? info.next : info.prev
        
        url = url.split('page=');
        
        // Quitamos los digitos de la pagina
        url = url[0] + 'page=' + new_page + url[1].slice(currentPage.toString().length);

        dispatch(setPage(new_page));
        dispatch(loadCharacters({ url }));
    };

    useEffect(() => {
        const pages = info.pages;
        let items = [];
        let outOfRange = false;
        let ellipsis_number = 0;
        const skip = 1;

        for (let number = 1; number <= pages; number++) {
            if (number <= skip || number > pages - skip || Math.abs(number - currentPage) <= skip){
                outOfRange = false;

                items.push(
                    <PageItem id={number} key={number} active={number === currentPage} onClick={onNumberPageClickHandler}>
                        {number}
                    </PageItem>,
                );
            }
            else{
                if(!outOfRange){
                    items.push(
                        <Pagination.Ellipsis key={'ellipsis_' + ellipsis_number} />
                    );
                    ellipsis_number ++;
                }

                outOfRange = true;
            }
        }
        setPageArray(items);
    }, []);
  
    return (
        <Pagination className='justify-content-center'>
            <Pagination.Prev disabled={prevDisable} key='prev' onClick={onPrevPageClickHandler}/>
            {pageArray}
            <Pagination.Next disabled={nextDisable} key='next' onClick={onNextPageClickHandler}/>
        </Pagination>
    );
}