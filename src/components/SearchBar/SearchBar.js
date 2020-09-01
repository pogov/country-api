import React from "react";
import MyContext from "../../context/Context";
import styles from "./SearchBar.module.css";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useSearch } from "../../hooks/useSearch";

const SearchBar = () => {
  const { context, setFilteredCountries } = React.useContext(MyContext);
  const [search, setSearch] = React.useState("");

  const handleSearch = useSearch(
    search,
    setSearch,
    context,
    setFilteredCountries,
    "name",
  );

  return (
    <div className={styles.container}>
      <FontAwesomeIcon icon={faSearch} className={styles.icon} size="sm" />
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search for a country..."
        onChange={handleSearch}
        value={search}
      />
    </div>
  );
};

export default SearchBar;
