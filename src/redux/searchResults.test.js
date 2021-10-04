import reducer, { addSearchResults, setIsLoading } from "./searchResults";

describe("searchResultsSlice reducer", () => {
  const initialState = {
    isLoading: false,
    videos: [],
  };

  test("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  test("should handle search results being added to searchResults videos array", () => {
    const previousState = { videos: [] };
    const videoItemObj = {
      kind: "youtube#searchResult",
      etag: "lkasdjfasdl050",
    };
    expect(reducer(previousState, addSearchResults([videoItemObj]))).toEqual({
      videos: [videoItemObj],
    });
  });

  test("should handle isLoading value", () => {
    const previousState = { isLoading: false, videos: [] };

    expect(reducer(previousState, setIsLoading(true))).toEqual({
      isLoading: true,
      videos: [],
    });
  });
});
