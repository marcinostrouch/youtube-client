import React from "react";
import YouTube from "react-youtube";

export const VideoPlayer = ({ videoId }) => (
  <YouTube width={768} {...{ videoId }} />
);
