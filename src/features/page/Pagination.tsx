/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from 'react-bootstrap/Pagination';
import PageItem from 'react-bootstrap/PageItem';
import {
  getPage, setPage, increment, decrement,
} from './pageSlice';
import { loadCharacters } from '../allCharacters/allCharactersSlice';
import { InfoResult } from './interface';

export default function Pager({ info }: InfoResult) {
  // FIXME: any
  const [pageArray, setPageArray] = useState<any[]>([]);
  const currentPage = useSelector(getPage);
  const { next, prev, pages: lastPage } = info;

  const dispatch = useDispatch();

  const onNextPageClickHandler = (_e) => {
    dispatch(increment());
    // FIXME: loadCharacter
    dispatch(loadCharacters(next));
  };

  const onPrevPageClickHandler = (_e) => {
    dispatch(decrement());
    // FIXME: loadCharacter
    dispatch(loadCharacters(prev));
  };

  const onLastPageClickHandler = (_e) => {
    dispatch(setPage(lastPage));
    // FIXME: loadCharacter
    dispatch(loadCharacters());
  };

  const onFirstPageClickHandler = (_e) => {
    dispatch(setPage(1));
    // FIXME: loadCharacter
    dispatch(loadCharacters());
  };

  useEffect(() => {
    const prevDisable = prev === null;
    const nextDisable = next === null;
    const items = [
      <Pagination.First disabled={prevDisable} key="first" onClick={onFirstPageClickHandler} />,
      <Pagination.Prev disabled={prevDisable} key="prev" onClick={onPrevPageClickHandler} />,
      <PageItem key="currentPage" active>{currentPage}</PageItem>,
      <Pagination.Next disabled={nextDisable} key="next" onClick={onNextPageClickHandler} />,
      <Pagination.Last disabled={nextDisable} key="last" onClick={onLastPageClickHandler} />,
    ];

    setPageArray(items);
  }, []);

  return (
    <Pagination className="justify-content-center">
      {pageArray}
    </Pagination>
  );
}
