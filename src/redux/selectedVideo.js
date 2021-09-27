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
    addSelectedVideo: (state, action) => {
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

export const { addSelectedVideo } = selectedVideoSlice.actions;
export default selectedVideoSlice.reducer;
