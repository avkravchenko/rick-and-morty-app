import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import "./card-details.scss";

const CharacterDetailsPage = () => {
  const { id } = useParams();
  const characters = useSelector((state) => state.characters.characters);
  const character = characters.find((char) => char.id === +id);

  if (!character) {
    return <div>Character not found!</div>;
  }

  return (
    <div className="character-details">
      <Link className="character-details__back" to="/">
        Back to Characters
      </Link>
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />
      <p>Gender: {character.gender}</p>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>From: {character.origin.name}</p>
      <p>Where: {character.location.name}</p>
    </div>
  );
};

export default CharacterDetailsPage;
