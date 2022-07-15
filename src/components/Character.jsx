import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Badge from 'react-bootstrap/Badge'
import { other, alive, dead, male, female, genderless, unknown, alien, human } from '../const'

const getStatusBg = (status) => {
    const _default = "secondary";
    const statusMap = {
        alive: "success",
        dead: "danger"
    }

    if (typeof status !== "string") return _default;
    return statusMap[status.toLowerCase()] || _default;
}


export default function Character({ character }) {
    const { id, name, image, gender, status, species, origin, location } = character;
    const statusBg = getStatusBg(status);

    // TODO: move to function + map
    let genderIcon = unknown;
    if (gender === 'Male') {
        genderIcon = male;
    } else if (gender === 'Female') {
        genderIcon = female;
    } else if (gender === 'Genderless') {
        genderIcon = genderless;
    }

    let specieIcon = unknown;
    if (species === 'Human') {
        specieIcon = human;
    } else if (species === 'Alien') {
        specieIcon = alien;
    }

    const moreInfoButton = (text) => {
        if(text !== 'unknown')
            return <button className='btn btn-outline-primary btn-sm mt-2 me-1'>{text}</button>;
    }

    return (
        <div key={id} className='col-12 col-xl-4 col-lg-6 col-md-12 mb-2'>
            <div className='card lift h-100 w-100'>
                <div className='card-body d-flex justify-content-center flex-column'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className='mr-3'>
                            <h5>{name} <Badge pill bg={statusBg}> </Badge></h5>
                            <div className='text-muted small'>
                                <p>Gender: <FontAwesomeIcon icon={genderIcon} /></p>
                                <p>Specie: <FontAwesomeIcon icon={specieIcon} /></p>
                            </div>
                        </div>
                        <img className='character-image' src={image} alt='character' />
                    </div>
                    <hr className='mb-1' />
                    <div className='d-flex justify-content-center'>
                        <button className='btn btn-outline-primary btn-sm mt-2 me-1'>More info</button>
                        {moreInfoButton(origin.name)}
                        {moreInfoButton(location.name)}
                    </div>
                </div>
            </div>
        </div>
    )
}