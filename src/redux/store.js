import { configureStore } from "@reduxjs/toolkit";
import searchResultsReducer from "./searchResults";
import selectedVideoReducer from "./selectedVideo";

export default configureStore({
  reducer: {
    searchResults: searchResultsReducer,
    selectedVideo: selectedVideoReducer,
  },
});
