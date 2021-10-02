import React from "react";
import ReactPlayer from "react-player";
import * as videoPlayerStyles from "./videoPlayer.module.scss";

export const VideoPlayer = ({ videoId }) => {
  const videoUrl = `https://www.youtube.com/watch?v=${
    videoId || "6JQm5aSjX6g"
  }} `;

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
