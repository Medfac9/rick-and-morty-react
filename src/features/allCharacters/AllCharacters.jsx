import React from 'react';
import { useSelector } from 'react-redux';
import Character from '../../components/Character';

const AllCharacters = () => {
    const { characters } = useSelector((state) => state.allCharacters);

    return (
        <div className='row justify-content-around align-items-start p-4'>
            {console.log('characters')}
            {console.log(characters)}
            {characters.map((character) => (
                // console.log(character)
                <Character character={character} key={character.id} />
            ))}
        </div>
    );
};

export default AllCharacters;
