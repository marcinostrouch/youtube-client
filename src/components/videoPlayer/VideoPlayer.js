import React, { useMemo } from "react";
import ReactPlayer from "react-player";
import * as videoPlayerStyles from "./videoPlayer.module.scss";

export const VideoPlayer = ({ videoId }) => {
  const videoUrl = useMemo(
    () => `https://www.youtube.com/watch?v=${videoId}}`,
    [videoId]
  );

  return (
    <div className={videoPlayerStyles.playerWrapper}>
      <ReactPlayer
        className={videoPlayerStyles.reactPlayer}
        height="100%"
        width="100%"
        url={videoUrl}
        config={{ youtube: { playerVars: { autoplay: 1 } } }}
        controls
      />
    </div>
  );
};
