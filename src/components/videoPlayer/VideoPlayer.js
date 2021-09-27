import React from "react";
import YouTube from "react-youtube";

export const VideoPlayer = ({ videoId }) => {
  const opts = { playerVars: { autoplay: 1 } };
  return <YouTube width={768} {...{ videoId, opts }} />;
};
