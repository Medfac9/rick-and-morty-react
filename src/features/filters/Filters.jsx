import React from 'react';
import Form from 'react-bootstrap/Form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Badge from 'react-bootstrap/Badge'
import { useSelector } from 'react-redux';
import { selectFilters } from './filtersSlice';
import { other, alive, dead, male, female, genderless, unknown, alien, human } from '../../const'

const Filters = ({ onChange }) => {

    const filters = useSelector(selectFilters);

    const onFiltersChangeHandler = (e) => {

        // TODO: LIMPIAR
        let new_filters = {...filters}
        const filter_name = e.target.name;

        let filter_id = e.target.name
        // Si no viene un - cogemos el id para filtrar
        if(e.target.id.includes('-') === false){
            filter_id = e.target.id;
        }
        // Si viene 'all' añadimos '-all' ya que filtra por todos
        else if(e.target.id.includes('all')){
            filter_id = filter_name + '-all';
        }
        // Sino, añadimos '-unknown' ya que filtra por unknown en status o gender
        else{
            filter_id = filter_name + '-unknown' ;
        }

        new_filters = { ...new_filters, [filter_name]: filter_id }
        onChange(new_filters);
    };


    return (
        <Form id='filters-form'>
            <Form.Group className='mb-3' controlId='status'>
                <Form.Label>Status:</Form.Label><br />
                <Form.Check
                    inline
                    onChange={onFiltersChangeHandler}
                    label='All'
                    name='status'
                    type='radio'
                    id='status-all'
                    defaultChecked={filters['status'] === 'status-all'}
                />
                <Form.Check
                    inline
                    onChange={onFiltersChangeHandler}
                    label={<>Alive <Badge pill bg={alive}> </Badge></>}
                    name='status'
                    type='radio'
                    id='alive'
                    defaultChecked={filters['status'] === 'alive'}
                />
                <Form.Check
                    inline
                    onChange={onFiltersChangeHandler}
                    label={<>Dead <Badge pill bg={dead}> </Badge></>}
                    name='status'
                    type='radio'
                    id='dead'
                    defaultChecked={filters['status'] === 'dead'}
                />
                <Form.Check
                    inline
                    onChange={onFiltersChangeHandler}
                    label={<>Unknown <Badge pill bg={other}> </Badge></>}
                    name='status'
                    type='radio'
                    id='satus-unknown'
                    defaultChecked={filters['status'] === 'status-unknown'}
                />
            </Form.Group>
            <Form.Group className='mb-3' controlId='specie'>
                <Form.Label>Specie:</Form.Label><br />
                <Form.Check
                    inline
                    onChange={onFiltersChangeHandler}
                    label='All'
                    name='specie'
                    type='radio'
                    id='specie-all'
                    defaultChecked={filters['specie'] === 'specie-all'}
                />
                <Form.Check
                    inline
                    onChange={onFiltersChangeHandler}
                    label={<>Human <FontAwesomeIcon icon={human} /></>}
                    name='specie'
                    type='radio'
                    id='human'
                    defaultChecked={filters['specie'] === 'human'}
                />
                <Form.Check
                    inline
                    onChange={onFiltersChangeHandler}
                    label={<>Alien <FontAwesomeIcon icon={alien} /></>}
                    name='specie'
                    type='radio'
                    id='alien'
                    defaultChecked={filters['specie'] === 'alien'}
                />
            </Form.Group>
            <Form.Group className='mb-3' controlId='gender'>
                <Form.Label>Gender:</Form.Label><br />
                <Form.Check
                    inline
                    onChange={onFiltersChangeHandler}
                    label='All'
                    name='gender'
                    type='radio'
                    id='gender-all'
                    defaultChecked={filters['gender'] === 'gender-all'}
                />
                <Form.Check
                    inline
                    onChange={onFiltersChangeHandler}
                    label={<>Female <FontAwesomeIcon icon={female} /></>}
                    name='gender'
                    type='radio'
                    id='female'
                    defaultChecked={filters['gender'] === 'female'}
                />
                <Form.Check
                    inline
                    onChange={onFiltersChangeHandler}
                    label={<>Male <FontAwesomeIcon icon={male} /></>}
                    name='gender'
                    type='radio'
                    id='male'
                    defaultChecked={filters['gender'] === 'male'}
                />
                <Form.Check
                    inline
                    onChange={onFiltersChangeHandler}
                    label={<>Genderless <FontAwesomeIcon icon={genderless} /></>}
                    name='gender'
                    type='radio'
                    id='genderless'
                    defaultChecked={filters['gender'] === 'genderless'}
                />
                <Form.Check
                    inline
                    onChange={onFiltersChangeHandler}
                    label={<>Unknown <FontAwesomeIcon icon={unknown} /></>}
                    name='gender'
                    type='radio'
                    id='gender-unknown'
                    defaultChecked={filters['gender'] === 'gender-unknown'}
                />
            </Form.Group>
        </Form>
    );
};

export default Filters;
