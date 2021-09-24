import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addSearchResults } from "../../redux/searchResults";
import * as searchStyles from "./search.module.scss";

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();

  const handleInputChange = e => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=9&type=video&q=${searchTerm}&safeSearch=none&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
      )
      .then(response => {
        console.log(response.data.items);
        dispatch(addSearchResults(response.data.items));
      })
      .catch(err => console.log(err));
  };

  return (
    <div className={searchStyles.searchContainer}>
      <form onSubmit={e => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={e => handleInputChange(e)}
        />
        <button type="submit" aria-label="Search">
          SearchBtnIcon
        </button>
      </form>
    </div>
  );
};
