import React from "react";

export const VideoListItem = ({ videoItem }) => {
  const { channelTitle, viewCount, timeStamp, title, imageUrl } = videoItem;
  return (
    <div>
      <img src={imageUrl} alt="" />
      <div className="video-row__text">
        <h3>{title}</h3>
        <p>
          {channelTitle} * {viewCount} views * {timeStamp}
        </p>
      </div>
    </div>
  );
};
