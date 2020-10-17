import React from "react";
import styles from "./DropdownMenu.module.css";
import PropTypes from "prop-types";

const DropdownMenu = ({ list, header, handler }) => {
  const handleClick = (e) => {
    handler(e);
  };

  return (
    <div className={styles.customSelect}>
      <select onChange={(e) => handleClick(e)}>
        <option value="">{header}</option>
        {list.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

DropdownMenu.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  header: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
};

export default DropdownMenu;
