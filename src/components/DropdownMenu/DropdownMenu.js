import React, { useRef } from "react";
import styles from "./DropdownMenu.module.css";
import PropTypes from "prop-types";

import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DropdownMenu = ({ list, header, handler }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const handleClick = (e) => {
    handler(e);
    setIsVisible(false);
  };

  const dropdownRef = useRef(null);

  document.addEventListener("mousedown", (e) => {
    if (!dropdownRef.current || dropdownRef.current.contains(e.target)) {
      return;
    }
    setIsVisible(false);
  });
  return (
    <div ref={dropdownRef} className={styles.menu}>
      <div className={styles.header} onClick={() => setIsVisible(!isVisible)}>
        <p>{header}</p>
        <FontAwesomeIcon icon={isVisible === false ? faAngleDown : faAngleUp} />
      </div>
      {isVisible && (
        <div data-testid="optionsList" className={styles.list}>
          {list.map((item) => {
            return (
              <div key={item} className={styles.listItem} onClick={handleClick}>
                <p>{item}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

DropdownMenu.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  header: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
};

export default DropdownMenu;
