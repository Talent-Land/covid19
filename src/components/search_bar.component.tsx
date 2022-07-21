import React from "react";
import SearchSVG from "../assets/svg/search.svg";

export const SearchBar = () => {
  return (
    <div className="flex m-1">
      <div className='bg-blue-600'>
        <SearchSVG classname="text-black fill-current h-6" title={false} />
      </div>
      <div className="text-gray-500 text-xl pl-2">
        <p>Search...</p>
      </div>
    </div>
  );
};

export default SearchBar;
