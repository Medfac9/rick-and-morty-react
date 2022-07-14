import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Badge from 'react-bootstrap/Badge'
import { other, alive, dead, male, female, genderless, unknown, alien, human } from '../const'

export default function Character(character) {

    // console.log(character)

    let statusBg = other;
    if (character.character.status === 'Alive') {
        statusBg = alive;
    } else if (character.character.status === 'Dead') {
        statusBg = dead;
    }
    
    let genderIcon = unknown;
    if (character.character.gender === 'Male') {
        genderIcon = male;
    } else if (character.character.gender === 'Female') {
        genderIcon = female;
    } else if (character.character.gender === 'Genderless') {
        genderIcon = genderless;
    }

    let specieIcon = unknown;
    if (character.character.species === 'Human') {
        specieIcon = human;
    } else if (character.character.species === 'Alien') {
        specieIcon = alien;
    }

    const moreInfoButton = (text) => {
        if(text !== 'unknown')
            return <button className='btn btn-outline-primary btn-sm mt-2 me-1'>{text}</button>;
    }

    return (
        <div key={character.character.id} className='col-12 col-xl-4 col-lg-6 col-md-12 mb-2'>
            <div className='card lift h-100 w-100'>
                <div className='card-body d-flex justify-content-center flex-column'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className='mr-3'>
                            <h5>{character.character.name} <Badge pill bg={statusBg}> </Badge></h5>
                            <div className='text-muted small'>
                                <nav>Gender: <FontAwesomeIcon icon={genderIcon} /></nav>
                                <nav>Specie: <FontAwesomeIcon icon={specieIcon} /></nav>
                            </div>
                        </div>
                        <img className='character-image' src={character.character.image} alt='character' />
                    </div>
                    <hr className='mb-1' />
                    <div className='d-flex justify-content-center'>
                        <button className='btn btn-outline-primary btn-sm mt-2 me-1'>More info</button>
                        {moreInfoButton(character.character.origin.name)}
                        {moreInfoButton(character.character.location.name)}
                    </div>
                </div>
            </div>
        </div>
    )
}