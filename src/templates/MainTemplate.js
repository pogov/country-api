import React from "react";
import PropTypes from "prop-types";
import Header from "../components/Header/Header";

const MainTemplate = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default MainTemplate;
