import { createSlice } from "@reduxjs/toolkit";

export const searchResultsSlice = createSlice({
  name: "searchResults",
  initialState: { isLoading: false, videos: [] },
  reducers: {
    addSearchResults: (state, action) => {
      state.videos = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { addSearchResults, setIsLoading } = searchResultsSlice.actions;
export default searchResultsSlice.reducer;
