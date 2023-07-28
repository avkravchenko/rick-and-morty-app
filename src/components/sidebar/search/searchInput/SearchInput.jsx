import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeSearchQuery } from "../../../../store/store";
import "./search-input.scss";

function SearchInput() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(changeSearchQuery(inputValue));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="search-input"
        type="text"
        placeholder="find character by name"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button className="search-btn">search</button>
    </form>
  );
}

export default SearchInput;
