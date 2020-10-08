import React from "react";
// import styles from "./DropdownMenu.module.css";
import PropTypes from "prop-types";

// import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DropdownMenu = ({ list, header, handler }) => {
  // const [isVisible, setIsVisible] = React.useState(false);
  const handleClick = (e) => {
    handler(e);
    // setIsVisible(false);
  };

  // const dropdownRef = useRef(null);

  // document.addEventListener("mousedown", (e) => {
  //   if (!dropdownRef.current || dropdownRef.current.contains(e.target)) {
  //     return;
  //   }
  //   setIsVisible(false);
  // });
  return (
    <select
      // className={styles.menu}
      onChange={(e) => handleClick(e)}>
      <option
        // className={styles.header}
        value="">
        {header}
      </option>
      {list.map((item) => {
        return (
          <option
            key={item}
            value={item}
            // className={styles.listItem}
          >
            {item}
          </option>
        );
      })}
    </select>
  );
};

DropdownMenu.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  header: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
};

export default DropdownMenu;
