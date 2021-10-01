import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addSearchResults, setIsLoading } from "../../redux/searchResults";
import * as searchStyles from "./search.module.scss";
import SearchIcon from "../../assets/search.svg";

// TODO: Add search suggestions

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();

  const handleInputChange = e => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(setIsLoading(true));

    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=9&type=video&q=${searchTerm}&safeSearch=none&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
      )
      .then(response => {
        dispatch(addSearchResults(response.data.items));
      })
      .catch(err => console.log(err));

    dispatch(setIsLoading(false));
  };

  return (
    <div className={searchStyles.searchContainer}>
      <form className={searchStyles.searchForm} onSubmit={e => handleSubmit(e)}>
        <input
          type="search"
          className={searchStyles.inputField}
          placeholder="Search"
          value={searchTerm}
          onChange={e => handleInputChange(e)}
        />
        <button type="submit" className={searchStyles.submitButton}>
          <img
            className={searchStyles.searchIcon}
            src={SearchIcon}
            alt="search icon"
          />
        </button>
      </form>
    </div>
  );
};
