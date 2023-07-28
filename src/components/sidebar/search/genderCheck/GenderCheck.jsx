import React from "react";
import MyRadioInput from "../../../../library/UI/MyRadioInput";

function GenderCheck() {
  const gender = ["male", "female", "unknown", "genderless"];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h4>Select a gender</h4>
      <form onSubmit={handleSubmit}>
        {gender.map((item, index) => {
          return (
            <MyRadioInput key={item + index} name={"gender"} label={item} />
          );
        })}
      </form>
    </div>
  );
}

export default GenderCheck;
