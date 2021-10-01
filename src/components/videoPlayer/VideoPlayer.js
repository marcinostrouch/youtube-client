import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import * as videoPlayerStyles from "./videoPlayer.module.scss";

export const VideoPlayer = ({ videoId }) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [playerWidth, setPlayerWidth] = useState(0);

  const videoUrl = `https://www.youtube.com/watch?v=${
    videoId || "6JQm5aSjX6g"
  }} `;

  const updateDimensions = () => {
    const x = window.innerWidth;
    setWindowWidth(x);
  };

  useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    if (windowWidth > 992) {
      setPlayerWidth(windowWidth - 300);
    } else {
      setPlayerWidth(windowWidth);
    }
  }, [windowWidth]);

  return (
    <div className={videoPlayerStyles.videoPlayer}>
      <ReactPlayer
        height={`${(playerWidth * 9) / 16}px`}
        width={`${playerWidth}px`}
        url={videoUrl}
        config={{ youtube: { playerVars: { autoplay: 1 } } }}
        controls
      />
    </div>
  );
};
