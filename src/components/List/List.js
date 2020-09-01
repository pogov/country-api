import React from "react";
import styles from "./List.module.css";
import CountryCard from "../CountryCard/CountryCard";
import MyContext from "../../context/Context";

const List = () => {
  const { filteredCountries, context } = React.useContext(MyContext);

  const data = filteredCountries.length > 0 ? filteredCountries : context;

  return (
    <div className={styles.list}>
      {data.map((country) => {
        return <CountryCard key={country.name} country={country} />;
      })}
    </div>
  );
};

export default List;
