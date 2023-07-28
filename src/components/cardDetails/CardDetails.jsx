import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom"; // Import useParams

const CharacterDetailsPage = () => {
  const { id } = useParams(); // Access the character ID from route parameters
  const characters = useSelector((state) => state.characters);

  // Fetch character details based on id (you can use Redux here or other methods)
  // Replace the following with your API call or data retrieval logic
  const character = characters.find((char) => char.id === id);

  if (!character) {
    return <div>Character not found!</div>;
  }

  return (
    <div className="character-details">
      <Link to="/">Back to Characters</Link>
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />
      <p>Gender: {character.gender}</p>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      {/* Additional details can be displayed here */}
    </div>
  );
};

export default CharacterDetailsPage;
