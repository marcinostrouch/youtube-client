import React, { useState } from "react";
import ContentLoader from "react-content-loader";

export const VideoThumbnail = ({ imgSrc }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // TODO: improve ContentLoader responsiveness
  return (
    <div>
      {!isLoaded ? (
        <ContentLoader
          speed={1}
          width={267}
          height={150}
          viewBox="0 0 267 150"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="1" ry="1" width="267" height="150" />
        </ContentLoader>
      ) : null}
      <img
        style={isLoaded ? {} : { display: "none" }}
        src={imgSrc}
        alt="video thumbnail"
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};
