import React from "react";
import MyRadioInput from "../../../../library/UI/MyRadioInput";

function SpeciesCheck() {
  const species = [
    "human",
    "alien",
    "humanoid",
    "poopybutthole",
    "mythological",
    "unknown",
    "animal",
    "disease",
    "robot",
    "cronenberg",
    "planet",
  ];
  return (
    <div>
      <h4>Select a species</h4>
      <form>
        {species.map((item, index) => {
          return (
            <MyRadioInput key={item + index} name={"species"} label={item} />
          );
        })}
      </form>
    </div>
  );
}

export default SpeciesCheck;
