import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Main from "./main";
import "@fortawesome/fontawesome-free/js/all.js";
import Youtube from "./service/youtube";
const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY);
ReactDOM.render(
  <React.StrictMode>
    <Main youtube={youtube} />
  </React.StrictMode>,
  document.getElementById("root")
);
