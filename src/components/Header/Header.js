import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import MyContext from "../../context/Context";

import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faMoon as faMoonEmpty } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const { theme, setThemeState } = useContext(MyContext);
  const handleChangeTheme = () => {
    if (theme === "light") setThemeState("dark");
    if (theme === "dark") setThemeState("light");
  };
  return (
    <div className={styles.header}>
      <Link className={styles.h3} to="/">
        <h3>Where in the world?</h3>
      </Link>
      <button className={styles.modeBtn} onClick={handleChangeTheme}>
        <FontAwesomeIcon icon={theme === "light" ? faMoonEmpty : faMoon} />
        <p>Dark Mode</p>
      </button>
    </div>
  );
};

export default Header;
