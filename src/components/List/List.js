import React from "react";
import styles from "./List.module.css";
import CountryCard from "../CountryCard/CountryCard";
import MyContext from "../../context/Context";

const List = () => {
  const { filtered, context } = React.useContext(MyContext);

  const data = filtered.length > 0 ? filtered : context;

  return (
    <div className={styles.list}>
      {data.map((country) => {
        return <CountryCard key={country.name} country={country} />;
      })}
    </div>
  );
};

export default List;
