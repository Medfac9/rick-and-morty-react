import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPage, setPage } from './pageSlice';
import Pagination from 'react-bootstrap/Pagination'
import PageItem from 'react-bootstrap/PageItem'
import { loadCharacters } from '../allCharacters/allCharactersSlice'

const Paginator = ({ info }) => {
    const page = useSelector(selectPage);

    const prevDisable = info.prev === null ? 'disabled' : '';
    const nextDisable = info.next === null ? 'disabled' : '';

    const dispatch = useDispatch();

    const goToNextPage = () => {
        dispatch(setPage(page + 1));
        dispatch(loadCharacters(info.next));
    }

    const goToPrevPage = () => {
        dispatch(setPage(page - 1));
        dispatch(loadCharacters(info.prev));
    }

    const onPageClickHandler = (e) => {
        if (e.target.id === 'next') {
            goToNextPage();
        }
        else if (e.target.id === 'prev') {
            goToPrevPage();
        }
    };

    const onNumberPageClickHandler = (e) => {
        let new_page = parseInt(e.target.getAttribute('id'));

        if(page === new_page){
            return;
        };

        let url = info.prev === null ? info.next : info.prev

        url = url.split('page=');

        // Quitamos los digitos de la pagina
        url = url[0] + 'page=' + new_page + url[1].slice(page.toString().length);

        dispatch(setPage(new_page));
        dispatch(loadCharacters({ url }));
    };

    let items = [];
    const pages = info.pages;
    let outOfRange = false;
    let ellipsis_number = 0;

    for (let number = 1; number <= pages; number++) {
        if (number <= 2 || number >= pages - 2 || Math.abs(number - page) <= 2){
            outOfRange = false;

            items.push(
                <PageItem id={number} key={number} active={number === page} onClick={onNumberPageClickHandler}>
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

    return (
        <Pagination className='justify-content-center'>
            <Pagination.Prev disabled={prevDisable} key='prev' onClick={onPrevPageClickHandler}/>
            {items}
            <Pagination.Next disabled={nextDisable} key='next' onClick={onNextPageClickHandler}/>
        </Pagination>
    )
};

export default Paginator;
