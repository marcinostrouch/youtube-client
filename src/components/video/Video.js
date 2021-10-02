import React from "react";
import { useSelector } from "react-redux";
import { VideoInfo } from "../videoInfo/VideoInfo";
import { VideoPlayer } from "../videoPlayer/VideoPlayer";
import * as videoStyles from "./video.module.scss";

const Video = () => {
  const {
    selectedVideo: videoMetaData,
    selectedVideo: { videoId },
  } = useSelector(state => state);

  return (
    <div className={videoStyles.videoContainer}>
      <VideoPlayer {...{ videoId }} />
      <VideoInfo {...{ videoMetaData }} />
    </div>
  );
};

export { Video };
