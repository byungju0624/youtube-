import React from "react";
import SideBar from "./components/sideBar";
import Navbar from "./components/navbar";
import VideoPlayer from "./components/videoPlayer";

function App() {
  return (
    <>
      <Navbar />
      <SideBar />
      <div>
        <VideoPlayer />
      </div>
    </>
  );
}

export default App;
