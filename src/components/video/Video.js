import React from "react";
import { useSelector } from "react-redux";
// import YouTube from "react-youtube";
import { VideoPlayer } from "../videoPlayer/VideoPlayer";
import * as videoStyles from "./video.module.scss";

const Video = () => {
  const boomboom = useSelector(state => state.searchResults.videos);
  console.log("boomboom ===", boomboom);
  const videoId = "09EJ4swwys4";
  return (
    <div className={videoStyles.videoContainer}>
      <h2>Video component</h2>
      <VideoPlayer video={videoId} />
    </div>
  );
};

export { Video };
