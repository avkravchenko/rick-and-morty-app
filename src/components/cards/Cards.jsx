import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { instance } from "../../axiosInstance";
import Card from "../card/Card";
import "./cards.scss";
import CharacterDetailsPage from "../cardDetails/CardDetails";
import { incrementCurrentPage } from "../../store/store";

const Cards = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [hasMoreCharacters, setHasMoreCharacters] = useState(true);
  const [totalCharacters, setTotalCharacters] = useState(0);
  const [charactersFetched, setCharactersFetched] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const searchQuery = useSelector((state) => state.search.searchQuery);
  const gender = useSelector((state) => state.gender.gender);
  const status = useSelector((state) => state.status.status);
  const species = useSelector((state) => state.species.species);
  const currentPage = useSelector((state) => state.currentPage.currentPage);
  const dispatch = useDispatch();

  useEffect(() => {
    setCharacters([]);
    setHasMoreCharacters(true);
    setCharactersFetched(0);
  }, [searchQuery, gender, status, species]);

  const fetchCharacters = async (page, query, gender, status, species) => {
    try {
      const response = await instance.get(
        `/?page=${page}&name=${query}&gender=${gender}&status=${status}&species=${species}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching characters:", error);
      return null;
    }
  };

  const fetchAndAppendCharacters = async () => {
    const response = await fetchCharacters(
      currentPage,
      searchQuery,
      gender,
      status,
      species
    );

    if (response) {
      const newCharacters = response.results;
      setCharacters((prevCharacters) => [...prevCharacters, ...newCharacters]);
      setTotalCharacters(response.info.count);
      setCharactersFetched((prevFetched) => prevFetched + newCharacters.length);
      setHasMoreCharacters(response.info.next !== null);
    }
  };

  useEffect(() => {
    fetchAndAppendCharacters();
  }, [currentPage, searchQuery, gender, status, species]);

  const handleScroll = () => {
    if (
      hasMoreCharacters &&
      charactersFetched < totalCharacters &&
      window.innerHeight + window.scrollY >= document.body.scrollHeight - 5
    ) {
      const debouncedScroll = setTimeout(() => {
        dispatch(incrementCurrentPage());
      }, 200);

      return () => clearTimeout(debouncedScroll);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const handleCardClick = (character) => {
    setSelectedCharacter(character);
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setSelectedCharacter(null);
    setIsPopupOpen(false);
  };

  return (
    <div className="cards">
      {isPopupOpen && (
        <div className="overlay" onClick={handlePopupClose}></div>
      )}
      {characters.map((character) => (
        <div
          key={character.id}
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
