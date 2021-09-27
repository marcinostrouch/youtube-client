import React from "react";
import { useSelector } from "react-redux";
import { VideoPlayer } from "../videoPlayer/VideoPlayer";
import * as videoStyles from "./video.module.scss";

const Video = () => {
  const {
    selectedVideo: { videoId },
  } = useSelector(state => state);

  return (
    <div className={videoStyles.videoContainer}>
      <h2>Video component</h2>
      <VideoPlayer {...{ videoId }} />
    </div>
  );
};

export { Video };
