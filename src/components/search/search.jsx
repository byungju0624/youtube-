import styles from "./search.module.css";
import React from "react";

const Search = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="/images/youtubeLogo.png" />
      </div>

      <input className={styles.input} type="search" placeholder="Search..." />
      <button className={styles.button} type="submit">
        <img src="./images/search.png" />
      </button>
    </header>
  );
};

export default Search;
