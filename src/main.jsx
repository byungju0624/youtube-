import React, { useState, useEffect } from "react";
import VideoList from "./components/video_list/video_list";
import Search from "./components/search/search";
import VideoDetail from "./components/video_detail/video_detail";
import styles from "./Main.module.css";

function App({ youtube }) {
  const [videos, setVideos] = useState([]); // 비디오를 저장해주는 역할
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  const search = (query) => {
    youtube
      .search(query) //
      .then((videos) => {
        setVideos(videos);
        setSelectedVideo(null);
      });
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, []);

  return (
    <div className={styles.app}>
      <Search onSearch={search} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? "list" : "grid"}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
