import React from "react";
import { useDispatch } from "react-redux";
import { selectVideo } from "../../redux/selectedVideo";
import * as videoListItemStyles from "./videoListItem.module.scss";

export const VideoListItem = ({ videoItem }) => {
  const { channelTitle, viewCount, timeStamp, title, imageUrl } = videoItem;

  const dispatch = useDispatch();

  const handleClick = video => {
    dispatch(selectVideo(video));
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/interactive-supports-focus
    <div
      className={videoListItemStyles.videoListItem}
      role="button"
      onClick={() => handleClick(videoItem)}
    >
      <button type="button">
        <img src={imageUrl} alt="" />
      </button>
      <div className="video-row__text">
        <button type="button">
          <h3>{title}</h3>
          <p>
            {channelTitle} * {viewCount} views * {timeStamp}
          </p>
        </button>
      </div>
    </div>
  );
};
