import React from "react";
import { Redirect } from "react-router-dom";
import styles from "./CountryCard.module.css";
import PropTypes from "prop-types";

const CountryCard = ({ country }) => {
  const [redirect, setRedirect] = React.useState(false);

  const handleClick = () => {
    setRedirect(true);
  };

  if (redirect) return <Redirect to={`/countries/${country.name}`} />;

  return (
    <div className={styles.card} onClick={handleClick}>
      <div className={styles.flag}>
        <img src={country.flag} alt={country.name} />
      </div>
      <div className={styles.info}>
        <h3>{country.name}</h3>
        <p>
          <span>Population:</span>{" "}
          {country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </p>
        <p>
          <span>Region:</span> {country.region}
        </p>
        <p>
          <span>Capital:</span> {country.capital}
        </p>
      </div>
    </div>
  );
};

CountryCard.propTypes = {
  country: PropTypes.string.isRequired,
};

export default CountryCard;
