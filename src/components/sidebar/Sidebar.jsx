import React from "react";
import "./sidebar.scss";
import SearchInput from "./search/searchInput/SearchInput";
import GenderCheck from "./search/genderCheck/GenderCheck";
import StatusCheck from "./search/statusCheck/StatusCheck";
import SpeciesCheck from "./search/speciesCheck/SpeciesCheck";

function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <h1>
          All about <br />
          Rick and Morty <br />
          characters
        </h1>

        <SearchInput />
        <GenderCheck />
        <StatusCheck />
        <SpeciesCheck />
      </div>
    </>
  );
}

export default Sidebar;
