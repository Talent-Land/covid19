import React from "react";
import SearchSVG from "../assets/svg/search.svg";

export const SearchBar = () => {
  return (
    <>
      <form>
        <label htmlFor="default-search" className="text-gray-900 sr-only">
          Buscar...
        </label>
        <div className='flex'>
          <input
            type="search"
            id="default-search"
            className="text-gray-900 bg-gray-50 rounded-l-lg border border-gray-300 p-2 pl-10 w-full"
          />
          <button type="submit" className='bg-blue-600 hover:bg-blue-800 rounded-r-lg px-4'>
            <SearchSVG classname="text-white fill-current h-6" title={false} />
          </button>
        </div>
      </form>
    </>
  );
};

export default SearchBar;
