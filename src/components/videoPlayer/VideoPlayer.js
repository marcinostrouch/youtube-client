import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import * as videoPlayerStyles from "./videoPlayer.module.scss";

export const VideoPlayer = ({ videoId }) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [playerWidth, setPlayerWidth] = useState(660);

  const updateDimensions = () => {
    const x = window.innerWidth;
    setWindowWidth(x);
  };

  useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  console.log("windowWidth ===", windowWidth);

  useEffect(() => {
    if (windowWidth > 660) {
      setPlayerWidth(windowWidth - 300);
    }
  }, [windowWidth]);

  const opts = {
    width: playerWidth,
    playerVars: { autoplay: 1 },
  };
  return (
    <div className={videoPlayerStyles.videoPlayer}>
      <YouTube {...{ videoId, opts }} />
    </div>
  );
};
