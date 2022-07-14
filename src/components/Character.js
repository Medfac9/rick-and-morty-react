import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMars, faVenus, faGenderless, faUser, faQuestion } from '@fortawesome/free-solid-svg-icons';
import { faRedditAlien } from '@fortawesome/free-brands-svg-icons';
import Badge from 'react-bootstrap/Badge'

export default function Character(character) {
    const { id, name, image, species, status, origin }  = character;

    let statusBg = "secondary";
    if (character.status === 'Alive') {
        statusBg = "success";
    } else if (character.status === 'Dead') {
        statusBg = "danger";
    }


    // TODO: Adapt code as above
    const male = <FontAwesomeIcon icon={faMars} />
    const female = <FontAwesomeIcon icon={faVenus} />
    const genderless = <FontAwesomeIcon icon={faGenderless} />
    const unknown = <FontAwesomeIcon icon={faQuestion} />

    const alien = <FontAwesomeIcon icon={faRedditAlien} />
    const human = <FontAwesomeIcon icon={faUser} />




    return (
        <div key={character.id} className='col-12 col-xl-4 col-lg-6 col-md-12 mb-2'>
            <div className='card lift h-100 w-100'>
                <div className='card-body d-flex justify-content-center flex-column'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className='mr-3'>
                            <h5>{name} <Badge pill bg={statusBg} /></h5>
                            <div className='text-muted small'>
                                Gender: {character.gender === 'Male' ? male : character.gender === 'Female' ? female : character.gender === 'Female' ? genderless : unknown}<br />
                                Specie: {character.species === 'Human' ? human : character.species === 'Alien' ? alien : other}<br />
                            </div>
                        </div>
                        <img className='character-image' src={character.image} alt='character' />
                    </div>
                    <hr className='mb-1' />
                    <div className='d-flex justify-content-center'>
                        <button className='btn btn-outline-primary btn-sm mt-2 me-1'>More info</button>
                        {character.origin.name !== 'unknown' ? <button className='btn btn-outline-primary btn-sm mt-2 me-1'>{character.origin.name}</button> : ''}
                        {character.location.name !== 'unknown' ? <button className='btn btn-outline-primary btn-sm mt-2'>{character.location.name}</button> : ''}
                    </div>
                </div>
            </div>
        </div>
    )
}