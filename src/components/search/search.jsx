import styles from "./search.module.css";
import React, { useRef, memo } from "react";

const Search = memo(({ onSearch }) => {
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
        <img className={styles.img} src="./images/youtubelogo.png" alt="logo" />
      </div>

      <input
        ref={inputRef}
        className={styles.input}
        type="search"
        placeholder="Search..."
        onKeyPress={pressKey}
      />

      <button className={styles.button} type="submit" onClick={handleClick}>
        <img src="./images/search.png" alt="search" />
      </button>
    </header>
  );
});
export default Search;
