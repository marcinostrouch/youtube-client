import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { VideoInfo } from "../videoInfo/VideoInfo";
import { VideoPlayer } from "../videoPlayer/VideoPlayer";
import * as videoStyles from "./video.module.scss";

const Video = () => {
  const [isVideo, setIsVideo] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState("");
  const [currentVideo, setCurrentVideo] = useState({});

  const {
    searchResults: { videos: searchResultsVideos },
    selectedVideo,
    selectedVideo: { videoId: selectedVideoId },
  } = useSelector(state => state);

  useEffect(() => {
    if (searchResultsVideos.length === 0) {
      setIsVideo(false);
    } else {
      setIsVideo(true);
    }
  }, [searchResultsVideos]);

  useEffect(() => {
    if (!selectedVideoId && searchResultsVideos.length) {
      const firstVideo = searchResultsVideos[0];

      const {
        id: { videoId: firstVideoId },
        snippet: { title, description },
      } = firstVideo;

      setCurrentVideoId(firstVideoId);
      setCurrentVideo({ title, description });
    } else {
      setCurrentVideoId(selectedVideoId);
      setCurrentVideo(selectedVideo);
    }
  }, [searchResultsVideos, selectedVideo, selectedVideoId]);

  if (!isVideo) {
    return null;
  }

  return (
    <div className={videoStyles.videoContainer}>
      <VideoPlayer videoId={currentVideoId} />
      <VideoInfo videoMetaData={currentVideo} />
    </div>
  );
};

export { Video };
