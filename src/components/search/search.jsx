import styles from "./search.module.css";
import React, { useRef } from "react";

const Search = ({ onSearch }) => {
  const inputRef = useRef(); //input의 정보 메모하기 용도
  const handleSearch = () => {
    const value = inputRef.current.value;
    console.log(value);
    onSearch(value);
  };
  const handleClick = () => {
    handleSearch();
  };
  const pressKey = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="/images/youtubeLogo.png" />
      </div>

      <input
        ref={inputRef}
        className={styles.input}
        type="search"
        placeholder="Search..."
        onKeyPress={pressKey}
      />
      <button className={styles.button} type="submit" onClick={handleClick}>
        <img src="./images/search.png" />
      </button>
    </header>
  );
};

export default Search;
