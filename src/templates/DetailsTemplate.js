import React from "react";
import { Link } from "react-router-dom";
import styles from "../components/Details/Details.module.css";
import PropTypes from "prop-types";

import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DetailsTemplate = ({ state, handleClick, currentCodes }) => {
  const {
    flag,
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
  } = state.country;

  return (
    <div className={styles.outerContainer}>
      <Link className={styles.backlink} to="/">
        <FontAwesomeIcon icon={faLongArrowAltLeft} />
        <p>back</p>
      </Link>
      <div className={styles.container}>
        <div className={styles.flag}>
          <img src={flag} alt={name} />
        </div>
        <div className={styles.info}>
          <h3>{name}</h3>
          <div className={styles.grid}>
            <div className={styles.left}>
              <p>
                <span>Native Name: </span>
                {nativeName}
              </p>
              <p>
                <span>Population: </span>
                {population &&
                  population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </p>
              <p>
                <span>Region: </span>
                {region}
              </p>
              <p>
                <span>Sub Region: </span>
                {subregion}
              </p>
              <p>
                <span>Capital: </span>
                {capital}
              </p>
            </div>
            <div className={styles.right}>
              <p>
                <span>Top level domain: </span>
                {topLevelDomain}
              </p>
              <p>
                <span>Currency: </span>
                {state.currencies.map((item, i) => (
                  <i key={i}>{item.name}</i>
                ))}
              </p>
              <p>
                <span>Language: </span>
                {state.languages.map((item, i) => {
                  if (i === state.languages.length - 1) {
                    return <i key={i}>{item.name}</i>;
                  } else {
                    return <i key={i}>{item.name}, </i>;
                  }
                })}
              </p>
            </div>
          </div>
          <div className={styles.btns}>
            <div className={styles.left}>
              <p>Border countries: </p>
            </div>
            <div className={styles.right}>
              {state.borders.map((item, i) => (
                <button
                  onClick={() => handleClick(item)}
                  className={styles.btn}
                  key={i}>
                  {currentCodes(item)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

DetailsTemplate.propTypes = {
  state: PropTypes.object,
  handleClick: PropTypes.func,
  currentCodes: PropTypes.func,
};

export default DetailsTemplate;
// state, handleClick, currentCodes
