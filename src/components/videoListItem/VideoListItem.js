import React from "react";
import { useDispatch } from "react-redux";
import { selectVideo } from "../../redux/selectedVideo";
import * as videoListItemStyles from "./videoListItem.module.scss";

// TODO: convert timestamp to a  "time from now" value

export const VideoListItem = ({ videoItem }) => {
  const { channelTitle, viewCount, timeStamp, title, imageUrl } = videoItem;

  const dispatch = useDispatch();

  const handleClick = video => {
    dispatch(selectVideo(video));
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/interactive-supports-focus
    <div
      className={videoListItemStyles.item}
      role="button"
      onClick={() => handleClick(videoItem)}
    >
      <img src={imageUrl} alt="" />

      <div className={videoListItemStyles.metaData}>
        <h3>{title}</h3>
        <div className={videoListItemStyles.secondaryMetaData}>
          <div className={videoListItemStyles.channelName}>{channelTitle}</div>

          <span className={videoListItemStyles.viewCount}>
            {viewCount} views
          </span>
          <span>{timeStamp}</span>
        </div>
      </div>
    </div>
  );
};
