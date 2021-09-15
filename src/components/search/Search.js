import React, { useState } from "react";
import * as searchStyles from "./search.module.scss";

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = e => {
    e.preventDefault();

    const searchTxt = e.target.value;
    console.log("searchTxt ===", searchTxt);
    setSearchTerm(searchTxt);
  };

  return (
    <div className={searchStyles.searchContainer}>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={e => handleInputChange(e)}
      />
    </div>
  );
};
