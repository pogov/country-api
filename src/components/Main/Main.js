import React from "react";
import styles from "./Main.module.css";
import List from "../List/List";
import SearchBar from "../SearchBar/SearchBar";
import FilterBar from "../FilterBar/FilterBar";

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.searchContainer}>
        <SearchBar />
        <FilterBar />
      </div>
      <List />
    </div>
  );
};

export default Main;
