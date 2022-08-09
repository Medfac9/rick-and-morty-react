import React from 'react';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';
import { getFilters } from './filtersSlice';
import { getStatusBg, getGenderIcon, getSpecieIcon } from '../../utils';
import { FilterState } from './interface';

// eslint-disable-next-line react/prop-types
function Filters({ onChange }) {
  const filters: FilterState = useSelector(getFilters);
  let newFilters = { ...filters };

  const onFiltersChangeHandler = (e) => {
    const filterName = e.target.name;
    let filterId: string | null = null;

    // Si es todos, el filtro lo ponemos a null
    if (e.target.id.includes('all')) {
      filterId = null;
    } else if (e.target.id.includes('unknown')) {
      // Si el filtro incluye unknown, como hay dos, se le quita
      // la parte antes del guion
      filterId = 'unknown';
    } else {
      filterId = e.target.id;
    }

    newFilters = { ...newFilters, [filterName]: filterId };
    onChange(newFilters);
  };

  return (
    <Form id="filters-form">
      <Form.Group className="mb-3" controlId="status">
        <Form.Label>Status:</Form.Label>
        <br />
        <Form.Check
          inline
          onChange={onFiltersChangeHandler}
          label="All"
          name="status"
          type="radio"
          id="status-all"
          defaultChecked={filters.status === null}
        />
        <Form.Check
          inline
          onChange={onFiltersChangeHandler}
          label={(
            <>
              Alive
              { ' ' }
              <Badge pill bg={getStatusBg('alive')}> </Badge>
            </>
          )}
          name="status"
          type="radio"
          id="alive"
          defaultChecked={filters.status === 'alive'}
        />
        <Form.Check
          inline
          onChange={onFiltersChangeHandler}
          label={(
            <>
              Dead
              { ' ' }
              <Badge pill bg={getStatusBg('dead')}> </Badge>
            </>
          )}
          name="status"
          type="radio"
          id="dead"
          defaultChecked={filters.status === 'dead'}
        />
        <Form.Check
          inline
          onChange={onFiltersChangeHandler}
          label={(
            <>
              Unknown
              { ' ' }
              <Badge pill bg={getStatusBg()}> </Badge>
            </>
          )}
          name="status"
          type="radio"
          id="status-unknown"
          defaultChecked={filters.status === 'unknown'}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="specie">
        <Form.Label>Specie:</Form.Label>
        <br />
        <Form.Check
          inline
          onChange={onFiltersChangeHandler}
          label="All"
          name="specie"
          type="radio"
          id="specie-all"
          defaultChecked={filters.specie === null}
        />
        <Form.Check
          inline
          onChange={onFiltersChangeHandler}
          label={(
            <>
              Human
              { ' ' }
              <FontAwesomeIcon icon={getSpecieIcon('human')} />
            </>
          )}
          name="specie"
          type="radio"
          id="human"
          defaultChecked={filters.specie === 'human'}
        />
        <Form.Check
          inline
          onChange={onFiltersChangeHandler}
          label={(
            <>
              Alien
              { ' ' }
              <FontAwesomeIcon icon={getSpecieIcon('alien')} />
            </>
          )}
          name="specie"
          type="radio"
          id="alien"
          defaultChecked={filters.specie === 'alien'}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="gender">
        <Form.Label>Gender:</Form.Label>
        <br />
        <Form.Check
          inline
          onChange={onFiltersChangeHandler}
          label="All"
          name="gender"
          type="radio"
          id="gender-all"
          defaultChecked={filters.gender === null}
        />
        <Form.Check
          inline
          onChange={onFiltersChangeHandler}
          label={(
            <>
              Female
              { ' ' }
              <FontAwesomeIcon icon={getGenderIcon('female')} />
            </>
          )}
          name="gender"
          type="radio"
          id="female"
          defaultChecked={filters.gender === 'female'}
        />
        <Form.Check
          inline
          onChange={onFiltersChangeHandler}
          label={(
            <>
              Male
              { ' ' }
              <FontAwesomeIcon icon={getGenderIcon('male')} />
            </>
          )}
          name="gender"
          type="radio"
          id="male"
          defaultChecked={filters.gender === 'male'}
        />
        <Form.Check
          inline
          onChange={onFiltersChangeHandler}
          label={(
            <>
              Genderless
              { ' ' }
              <FontAwesomeIcon icon={getGenderIcon('genderless')} />
            </>
          )}
          name="gender"
          type="radio"
          id="genderless"
          defaultChecked={filters.gender === 'genderless'}
        />
        <Form.Check
          inline
          onChange={onFiltersChangeHandler}
          label={(
            <>
              Unknown
              { ' ' }
              <FontAwesomeIcon icon={getGenderIcon()} />
            </>
          )}
          name="gender"
          type="radio"
          id="gender-unknown"
          defaultChecked={filters.gender === 'unknown'}
        />
      </Form.Group>
    </Form>
  );
}

export default Filters;
