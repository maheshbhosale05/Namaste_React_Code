import { useState } from "react";

const SearchBar = ({ onSearchClick }) => {
  const [searchText, setSearchText] = useState();
  return (
    <div className="flex justify-end gap-4 pt-4">
      <input
        type="text"
        className="block w-80 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus-visible:border-none focus:ring-2 focus:ring-inset focus:ring-[#ff0d0d] sm:text-sm sm:leading-6"
        placeholder="Search Bar..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      ></input>
      <button
        className="border-2 rounded-lg px-2 py-1 swiggy-button-hover"
        onClick={() => onSearchClick(searchText)}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
