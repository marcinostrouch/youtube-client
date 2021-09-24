import { createSlice } from "@reduxjs/toolkit";

export const searchResultsSlice = createSlice({
  name: "searchResults",
  initialState: { videos: [] },
  reducers: {
    addSearchResults: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.videos = action.payload;
    },
  },
});

export const { addSearchResults } = searchResultsSlice.actions;
export default searchResultsSlice.reducer;
