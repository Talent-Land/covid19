import React from "react";
import FilterSVG from "../assets/svg/filter.svg";
import SearchSVG from "../assets/svg/search.svg";

export const SearchBar = () => {
  return (
    <div className='flex mt-4 w-full'>
      {/* SEARCH BAR */}
      <form className='w-11/12'>
        <label htmlFor="default-search" className="text-gray-900 sr-only">
          Buscar...
        </label>
        <div className="flex">
          <input
            type="search"
            id="default-search"
            className="text-gray-900 bg-gray-50 rounded-l-lg border border-gray-300 px-2 pt-1 pb-1 pl-8 w-full"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-800 rounded-r-lg px-4"
          >
            <SearchSVG classname="text-white fill-current h-4" title={false} />
          </button>
        </div>
      </form>

      {/* FILTER BUTTON */}
      <button className="rounded-xl bg-gray-600 hover:bg-gray-800 mx-2 p-2">
        <FilterSVG classname="text-white fill-current h-4" title={false} />
      </button>
    </div>
  );
};

export default SearchBar;
