import React, { useState, useEffect } from "react";
import VideoList from "./components/video_list/video_list";
import Search from "./components/search/search";
import styles from "./Main.module.css";
import { YOUTUBE_API } from "./components/youtube_api/youtube_api";
function App() {
  const [videos, setVideos] = useState([]); // 비디오를 저장해주는 역할
  console.log(YOUTUBE_API);
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${YOUTUBE_API}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div className={styles.app}>
      <Search />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
