import React from "react";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import MyContext from "../../context/Context";

import { useSearch } from "../../hooks/useSearch";

const FilterBar = () => {
  const { context, setFiltered } = React.useContext(MyContext);
  const [value, setValue] = React.useState();

  const handleSelect = useSearch(
    value,
    setValue,
    context,
    setFiltered,
    "region",
  );

  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

  return (
    <DropdownMenu
      list={regions}
      header="Filter by region"
      handler={handleSelect}
    />
  );
};

export default FilterBar;
