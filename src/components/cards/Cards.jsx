import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { instance } from "../../axiosInstance";
import Card from "../card/Card";
import "./cards.scss";
import { v4 as uuidv4 } from "uuid";
import CharacterDetailsPage from "../cardDetails/CardDetails";

const Cards = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const searchQuery = useSelector((state) => state.search.searchQuery);
  const gender = useSelector((state) => state.gender.gender);
  const status = useSelector((state) => state.status.status);
  const species = useSelector((state) => state.species.species);

  useEffect(() => {
    setCharacters([]);
    setCurrentPage(1);
  }, [searchQuery, gender, status, species]);

  useEffect(() => {
    fetchCharacters(currentPage, searchQuery, gender, status, species);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentPage, searchQuery, gender, status, species]);

  const fetchCharacters = async (page, query, gender, status, species) => {
    try {
      const response = await instance.get(
        `/?page=${page}&name=${query}&gender=${gender}&status=${status}&species=${species}`
      );
      const newCharacters = response.data.results;
      setCharacters((prevCharacters) => [...prevCharacters, ...newCharacters]);
    } catch (error) {
      console.error("Error fetching characters:", error);
    }
  };

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.scrollHeight - 200
    ) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handleCardClick = (character) => {
    setSelectedCharacter(character);
  };

  const handlePopupClose = () => {
    setSelectedCharacter(null);
  };

  return (
    <div className="cards">
      {characters.map((character) => (
        <div
          key={uuidv4()}
          onClick={() => handleCardClick(character)}
          style={{ cursor: "pointer" }}
        >
          <Card data={character} />
        </div>
      ))}
      {selectedCharacter && (
        <CharacterDetailsPage
          character={selectedCharacter}
          onClose={handlePopupClose}
        />
      )}
    </div>
  );
};

export default Cards;
