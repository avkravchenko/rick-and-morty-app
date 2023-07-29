import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { instance } from "../../axiosInstance";
import Card from "../card/Card";
import "./cards.scss";
import { v4 as uuidv4 } from "uuid";
import { addCharacters } from "../../store/store";
import { Link } from "react-router-dom";

const Cards = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const searchQuery = useSelector((state) => state.search.searchQuery);
  const gender = useSelector((state) => state.gender.gender);
  const status = useSelector((state) => state.status.status);
  const species = useSelector((state) => state.species.species);
  const dispatch = useDispatch();

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
      dispatch(addCharacters(newCharacters));
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

  return (
    <div className="cards">
      {characters.map((character) => (
        <Link key={uuidv4()} to={`/characters/${character.id}`}>
          <Card data={character} />
        </Link>
      ))}
    </div>
  );
};

export default Cards;
