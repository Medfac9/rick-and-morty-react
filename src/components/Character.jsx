import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Badge from 'react-bootstrap/Badge'
import { getStatusBg, getGenderIcon, getSpecieIcon } from '../utils';
import MoreInfoButton from './MoreInfoButton'
export default function Character({ character }) {
    const statusBg = getStatusBg(character.status);
    const genderIcon = getGenderIcon(character.gender);
    const specieIcon = getSpecieIcon(character.species);

    // const moreInfoButton = (text) => {
    //     if(text !== 'unknown')
    //         return <button className='btn btn-outline-primary btn-sm mt-2 me-1'>{text}</button>;
    // }

    return (
        <div key={character.id} className='col-12 col-xl-4 col-lg-6 col-md-12 mb-2'>
            <div className='card lift h-100 w-100'>
                <div className='card-body d-flex justify-content-center flex-column'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className='mr-3'>
                            <h5>{character.name} <Badge pill bg={statusBg}> </Badge></h5>
                            <div className='text-muted small'>
                                <p>Gender: <FontAwesomeIcon icon={genderIcon} /></p>
                                <p>Specie: <FontAwesomeIcon icon={specieIcon} /></p>
                            </div>
                        </div>
                        <img className='character-image' src={character.image} alt='character' />
                    </div>
                    <hr className='mb-1' />
                    <div className='d-flex justify-content-center'>
                        <MoreInfoButton text='More info' />
                        <MoreInfoButton text={character.origin.name} />
                        <MoreInfoButton text={character.location.name} />
                    </div>
                </div>
            </div>
        </div>
    )
}