import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMars, faVenus, faGenderless, faUser, faQuestion } from '@fortawesome/free-solid-svg-icons';
import { faRedditAlien } from '@fortawesome/free-brands-svg-icons';
import Badge from 'react-bootstrap/Badge'

export default function Character(character) {
    const alive = <Badge pill bg="success"> </Badge>;
    const dead = <Badge pill bg="danger"> </Badge>;
    const other = <Badge pill bg="secondary"> </Badge>;

    const male = <FontAwesomeIcon icon={faMars} />
    const female = <FontAwesomeIcon icon={faVenus} />
    const genderless = <FontAwesomeIcon icon={faGenderless} />
    const unknown = <FontAwesomeIcon icon={faQuestion} />

    const alien = <FontAwesomeIcon icon={faRedditAlien} />
    const human = <FontAwesomeIcon icon={faUser} />

    return (
        <div key={character.character.id} className='col-12 col-xl-4 col-lg-6 col-md-12 mb-2'>
            <div className='card lift h-100 w-100'>
                <div className='card-body d-flex justify-content-center flex-column'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className='mr-3'>
                            <h5>{character.character.name} {character.character.status === 'Alive' ? alive : character.character.status === 'Dead' ? dead : other}</h5>
                            <div className='text-muted small'>
                                Gender: {character.character.gender === 'Male' ? male : character.character.gender === 'Female' ? female : character.character.gender === 'Female' ? genderless : unknown}<br />
                                Specie: {character.character.species === 'Human' ? human : character.character.species === 'Alien' ? alien : other}<br />
                            </div>
                        </div>
                        <img className='character-image' src={character.character.image} alt='character' />
                    </div>
                    <hr className='mb-1' />
                    <div className='d-flex justify-content-center'>
                        <button className='btn btn-outline-primary btn-sm mt-2 me-1'>More info</button>
                        {character.character.origin.name !== 'unknown' ? <button className='btn btn-outline-primary btn-sm mt-2 me-1'>{character.character.origin.name}</button> : ''}
                        {character.character.location.name !== 'unknown' ? <button className='btn btn-outline-primary btn-sm mt-2'>{character.character.location.name}</button> : ''}
                    </div>
                </div>
            </div>
        </div>
    )
}