import configureStore from "redux-mock-store";

export const initialState = {
  searchResults: {
    videos: [{ id: { videoId: "lorem-ipsum-dolor" } }],
  },
  selectedVideo: {
    videoId: "lorem-ipsum-dolor",
  },
};

const createStore = configureStore();

export const mockStore = createStore(initialState);
