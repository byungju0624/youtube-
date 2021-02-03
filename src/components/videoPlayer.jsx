import React from "react";
import styles from "./videoPlayer.module.css";
const VideoPlayer = (props) => {
  return (
    <>
      <div className={styles.main}>
        <span className={styles.player}>
          여기가 플레이어
          <video className={styles.video}>video</video>
        </span>
        <span className={styles.entry}>섹션</span>
      </div>
    </>
  );
};

export default VideoPlayer;
