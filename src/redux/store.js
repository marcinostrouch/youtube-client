import { configureStore } from "@reduxjs/toolkit";
import searchResultsReducer from "./searchResults";

export default configureStore({
  reducer: { searchResults: searchResultsReducer },
});
