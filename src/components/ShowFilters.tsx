import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { getFilters, setFilters } from '../features/filters/filtersSlice';
import { loadCharacters } from '../features/allCharacters/allCharactersSlice';
import Filters from '../features/filters/Filters';

export default function ShowFilters(): JSX.Element {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const selectedFilters = useSelector(getFilters);
  let filters = { ...selectedFilters };
  const dispatch = useDispatch();

  const onSaveFilterClickHandler = () => {
    dispatch(setFilters(filters));
    // FIXME: loadCharacter
    dispatch(loadCharacters());
    handleClose();
  };

  const onFiltersChangeHandler = (event) => {
    filters = event;
  };

  return (
    <div>
      <Button variant="outline-secondary" onClick={handleShow}>
        Filters
        { ' ' }
        <FontAwesomeIcon icon={faFilter} />
      </Button>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Filters</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Filters onChange={onFiltersChangeHandler} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button form="filters-form" variant="primary" onClick={onSaveFilterClickHandler}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
