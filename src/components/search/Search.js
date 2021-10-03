import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addSearchResults, setIsLoading } from "../../redux/searchResults";
import * as searchStyles from "./search.module.scss";
import SearchIcon from "../../assets/search.svg";

const DEFAULT_SEARCH_TERM = "chaos theory";

// TODO: Add search suggestions
export const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { videos } = useSelector(state => state.searchResults);

  const inputEl = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  const handleInputChange = e => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = e => {
    e?.preventDefault();

    dispatch(setIsLoading(true));

    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=9&type=video&q=${
          searchTerm || DEFAULT_SEARCH_TERM
        }&safeSearch=none&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
      )
      .then(response => {
        dispatch(addSearchResults(response.data.items));
        dispatch(setIsLoading(false));
      })
      .catch(err => {
        console.log(err);
        dispatch(setIsLoading(false));
      });
  };

  // Temporary solution for missing "recent search results" or "recommended videos"
  useEffect(() => {
    if (videos.length === 0) {
      handleSubmit();
    }
  }, []);

  return (
    <div className={searchStyles.searchContainer}>
      <form className={searchStyles.searchForm} onSubmit={e => handleSubmit(e)}>
        <input
          ref={inputEl}
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
