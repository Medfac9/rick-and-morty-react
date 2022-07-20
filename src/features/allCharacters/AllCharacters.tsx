import React from 'react';
import { useSelector } from 'react-redux';
import Character from '../../components/Character';
import { StoreState } from '../../app/interface';
import { CharacterInterface } from './interface';

function AllCharacters() {
  const { characters } = useSelector((state: StoreState) => state.allCharacters);

  return (
    <div className="row justify-content-around align-items-start p-4">
      {/* FIXME: aqui no se que pasa */}
      {characters.map((character: CharacterInterface) => (
        <Character character={character} key={character.id} />
      ))}
    </div>
  );
}

export default AllCharacters;
