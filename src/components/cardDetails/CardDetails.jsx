import "./card-details.scss";
import React from "react";

const CharacterDetailsPage = React.memo(({ character, onClose }) => {
  return (
    <div className="character-details">
      <p onClick={onClose} className="character-details__back">
        Back to characters
      </p>
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />
      <p>Gender: {character.gender}</p>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>From: {character.origin.name}</p>
      <p>Where: {character.location.name}</p>
    </div>
  );
});

export default CharacterDetailsPage;
