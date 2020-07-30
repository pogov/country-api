import { useEffect } from "react";

export const useSearch = (
  searchValue,
  setSearchValue,
  context,
  setFiltered,
  itemValue
) => {
  let regex = new RegExp(`${searchValue}`, "gi");
  let filteredContext = context.filter(item => item[itemValue].match(regex));

  useEffect(() => {
    setFiltered(filteredContext);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  const handleSearch = e => {
    setSearchValue(e.target.value || e.target.textContent);
  };

  return handleSearch;
};
