import React from "react";
import styles from "./sideBar.module.css";
const SideBar = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.firstsection}>
        <ul>
          <li>홈</li>
          <li>구독</li>
          <li>Originals</li>
          <li>YouTube Music</li>
        </ul>
      </div>
      <div className={styles.secondsection}>
        <ul>
          <li>홈</li>
          <li>구독</li>
          <li>Originals</li>
          <li>YouTube Music</li>
        </ul>
      </div>
      <div className={styles.thirdsection}>
        <ul>
          <li>홈</li>
          <li>구독</li>
          <li>Originals</li>
          <li>YouTube Music</li>
        </ul>
      </div>
      <div className={styles.fourthsection}>
        <ul>
          <li>홈</li>
          <li>구독</li>
          <li>Originals</li>
          <li>YouTube Music</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
