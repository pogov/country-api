import React from "react";
import { Link } from "react-router-dom";
import styles from "./CountryCard.module.css";
import PropTypes from "prop-types";

const CountryCard = ({ country }) => {
  return (
    <Link to={`/countries/${country.name}`} className={styles.link}>
      <div className={styles.card} data-testid="country-card">
        <div className={styles.flag}>
          <img src={country.flag} alt={country.name} />
        </div>
        <div className={styles.info}>
          <h3>{country.name}</h3>
          <p>
            <span>Population:</span>{" "}
            {country.population
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </p>
          <p>
            <span>Region:</span> {country.region}
          </p>
          <p>
            <span>Capital:</span> {country.capital}
          </p>
        </div>
      </div>
    </Link>
  );
};

CountryCard.propTypes = {
  country: PropTypes.object.isRequired,
};

export default CountryCard;
