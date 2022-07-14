import React from 'react';
import Form from 'react-bootstrap/Form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMars, faVenus, faGenderless, faUser, faQuestion } from '@fortawesome/free-solid-svg-icons';
import { faRedditAlien } from '@fortawesome/free-brands-svg-icons';
import Badge from 'react-bootstrap/Badge'
import { useSelector } from 'react-redux';
import { selectFilters } from './filtersSlice';

const Filters = (props) => {
    const alive = <Badge pill bg='success'> </Badge>;
    const dead = <Badge pill bg='danger'> </Badge>;
    const unknown_status = <Badge pill bg='secondary'> </Badge>;

    const male = <FontAwesomeIcon icon={faMars} />
    const female = <FontAwesomeIcon icon={faVenus} />
    const genderless = <FontAwesomeIcon icon={faGenderless} />
    const unknown_gender = <FontAwesomeIcon icon={faQuestion} />

    const alien = <FontAwesomeIcon icon={faRedditAlien} />
    const human = <FontAwesomeIcon icon={faUser} />

    const filters = useSelector(selectFilters);
    let new_filters = {...filters}

    const onFiltersChangeHandler = (e) => {
        const filter_name = e.target.name;
        const filter_id = e.target.id.includes('-') === false ? e.target.id : e.target.id.includes('all') ? filter_name+'-all' : filter_name+'-unknown' ;
        
        new_filters = { ...new_filters, [filter_name]: filter_id }
        props.onChange(new_filters);
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
                    label={<>Alive {alive}</>}
                    name='status'
                    type='radio'
                    id='alive'
                    defaultChecked={filters['status'] === 'alive'}
                />
                <Form.Check
                    inline
                    onChange={onFiltersChangeHandler}
                    label={<>Dead {dead}</>}
                    name='status'
                    type='radio'
                    id='dead'
                    defaultChecked={filters['status'] === 'dead'}
                />
                <Form.Check
                    inline
                    onChange={onFiltersChangeHandler}
                    label={<>Unknown {unknown_status}</>}
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
                    label={<>Human {human}</>}
                    name='specie'
                    type='radio'
                    id='human'
                    defaultChecked={filters['specie'] === 'human'}
                />
                <Form.Check
                    inline
                    onChange={onFiltersChangeHandler}
                    label={<>Alien {alien}</>}
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
                    label={<>Female {female}</>}
                    name='gender'
                    type='radio'
                    id='female'
                    defaultChecked={filters['gender'] === 'female'}
                />
                <Form.Check
                    inline
                    onChange={onFiltersChangeHandler}
                    label={<>Male {male}</>}
                    name='gender'
                    type='radio'
                    id='male'
                    defaultChecked={filters['gender'] === 'male'}
                />
                <Form.Check
                    inline
                    onChange={onFiltersChangeHandler}
                    label={<>Genderless {genderless}</>}
                    name='gender'
                    type='radio'
                    id='genderless'
                    defaultChecked={filters['gender'] === 'genderless'}
                />
                <Form.Check
                    inline
                    onChange={onFiltersChangeHandler}
                    label={<>Unknown {unknown_gender}</>}
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
