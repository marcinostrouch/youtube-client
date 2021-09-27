import React from "react";
import { useDispatch } from "react-redux";
import { addSelectedVideo } from "../../redux/selectedVideo";

export const VideoListItem = ({ videoItem }) => {
  const { channelTitle, viewCount, timeStamp, title, imageUrl } = videoItem;

  const dispatch = useDispatch();

  const handleClick = video => {
    dispatch(addSelectedVideo(video));
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/interactive-supports-focus
    <div role="button" onClick={() => handleClick(videoItem)}>
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
