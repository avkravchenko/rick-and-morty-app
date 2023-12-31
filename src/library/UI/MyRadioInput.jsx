import React from "react";
import { useDispatch } from "react-redux";
import {
  changeGender,
  changeStatus,
  changeSpecies,
  setToFirst,
} from "../../store/store";

function MyRadioInput({ name, label }) {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    switch (e.target.name) {
      case "gender":
        dispatch(changeGender(e.target.value));
        dispatch(setToFirst());
        break;
      case "status":
        dispatch(changeStatus(e.target.value));
        dispatch(setToFirst());
        break;
      case "species":
        dispatch(changeSpecies(e.target.value));
        dispatch(setToFirst());
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type="radio"
        name={name}
        onClick={handleClick}
        id={name}
        value={label}
      />
    </div>
  );
}

export default MyRadioInput;
