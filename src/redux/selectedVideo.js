import { createSlice } from "@reduxjs/toolkit";

export const selectedVideoSlice = createSlice({
  name: "selectedVideo",
  initialState: {
    videoId: "",
    title: "",
    channelTitle: "",
    description: "",
    timeStamp: "",
    imageUrl: "",
    viewCount: "",
  },
  reducers: {
    selectVideo: (state, action) => {
      const {
        videoId,
        title,
        channelTitle,
        description,
        timeStamp,
        imageUrl,
        viewCount,
      } = action.payload;

      return {
        ...state,
        videoId,
        title,
        channelTitle,
        description,
        timeStamp,
        imageUrl,
        viewCount,
      };
    },
  },
});

export const { selectVideo } = selectedVideoSlice.actions;
export default selectedVideoSlice.reducer;
