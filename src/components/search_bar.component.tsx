import React, { Dispatch, SetStateAction } from "react";
import FilterSVG from "../assets/svg/filter.svg";
import SearchSVG from "../assets/svg/search.svg";

interface props {
  setfilterState: Dispatch<SetStateAction<boolean>>;
  filterState: boolean;
}

export const SearchBar = ({ setfilterState, filterState }: props) => {
  return (
    <div className="flex mt-2 w-full">
      {/* SEARCH BAR */}
      <form className="w-11/12">
        <label htmlFor="default-search" className="text-grayT-900 sr-only">
          Buscar...
        </label>
        <div className="flex">
          <input
            type="search"
            id="default-search"
            className="text-grayT-900 bg-grayT-50 rounded-l-lg border border-grayT-300 px-2 pt-1 pb-1 pl-6 w-full"
          />
          <button
            type="submit"
            className="bg-blue-themePrimary hover:bg-blue-themeDark rounded-r-lg px-4"
          >
            <SearchSVG classname="text-whiteT fill-current h-4" title={false} />
          </button>
        </div>
      </form>

      {/* FILTER BUTTON */}
      <button
        onClick={() => {
          setfilterState(!filterState);
        }}
        className="rounded-xl bg-grayT-200 hover:bg-grayT-400 mx-2 p-2"
      >
        <FilterSVG classname="text-blackT fill-current h-4" title={false} />
      </button>
      
    </div>
  );
};

export default SearchBar;
