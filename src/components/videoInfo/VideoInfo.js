import React from "react";
import * as videoInfoStyles from "./videoInfo.module.scss";

const VideoInfo = ({ videoMetaData }) => {
  const { title, description } = videoMetaData;

  return (
    <div className={videoInfoStyles.metaData}>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export { VideoInfo };
