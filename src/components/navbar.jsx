import React from "react";
import styles from "./navbar.module.css";
const Navbar = (props) => {
  return (
    <nav className={styles.container}>
      <div>아이콘자리</div>
      <div>검색위치</div>
      <div>사용자 정보 위치</div>
    </nav>
  );
};

export default Navbar;
