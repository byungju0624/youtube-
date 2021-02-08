import React from "react";
import VideoItem from "../video_item/video_item";
import styles from "./video_list.module.css";
const VideoList = (props) => {
  const { videos, onVideoClick, display } = props;
  console.log(videos);
  return (
    <ul className={styles.container}>
      {videos.map((video) => (
        <VideoItem
          key={video.id}
          video={video}
          onVideoClick={onVideoClick}
          display={display}
        />
      ))}
    </ul>
  );
};

export default VideoList;
