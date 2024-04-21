import { useState } from "react";

const SearchBar = ({ onSearchClick }) => {
  const [searchText, setSearchText] = useState();
  return (
    <div className="searchBar">
      <input
        placeholder="Search Bar..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={() => onSearchClick(searchText)}>Search</button>
    </div>
  );
};

export default SearchBar;
