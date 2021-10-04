import axios from "axios";
import React, { useEffect, useState } from "react";
import ContentLoader from "react-content-loader";
import { useSelector } from "react-redux";
import { VideoListItem } from "../videoListItem/VideoListItem";
import * as sidebarStyles from "./sidebar.module.scss";

export const Sidebar = () => {
  const [videoListItems, setVideoListItems] = useState([]);

  const { isLoading, videos } = useSelector(state => state.searchResults);

  const createVideoListItems = videoResults =>
    Promise.all(
      videoResults.map(async vidRes => {
        const {
          id: { videoId },
          snippet: {
            title,
            publishedAt,
            channelTitle,
            description,
            thumbnails: {
              medium: { url: imageUrl },
            },
          },
        } = vidRes;

        const timeStamp = new Date(publishedAt).toLocaleDateString();

        const res = await axios.get(
          `https://www.googleapis.com/youtube/v3/videos?part=statistics%2C%20snippet&id=${videoId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
        );

        const { viewCount } = await res.data.items[0].statistics;

        return {
          videoId,
          title,
          channelTitle,
          description,
          timeStamp,
          imageUrl,
          viewCount,
        };
      })
    );

  useEffect(() => {
    createVideoListItems(videos).then(videoItems =>
      setVideoListItems(videoItems)
    );
  }, [videos]);

  if (isLoading) {
    // TODO:
    //  *  Improve ContentLoader responsiveness
    return (
      <div className={sidebarStyles.sidebarContainer}>
        <ContentLoader
          speed={1}
          width={300}
          height={500}
          viewBox="0 0 300 500"
          backgroundColor="#fff"
          foregroundColor="#fff"
        >
          <rect x="0" y="0" rx="5" ry="5" width="300" height="500" />
        </ContentLoader>
      </div>
    );
  }

  return (
    <div className={sidebarStyles.sidebarContainer}>
      {videoListItems.map(item => (
        <VideoListItem videoItem={item} />
      ))}
    </div>
  );
};
