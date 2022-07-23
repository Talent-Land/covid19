import { useEffect, Dispatch, SetStateAction, useState } from "react";
import FilterSVG from "../assets/svg/filter.svg";
import SearchSVG from "../assets/svg/search.svg";

interface props {
  setrunExample: Dispatch<SetStateAction<boolean>>;
  setfilterState: Dispatch<SetStateAction<boolean>>;
  filterState: boolean;
}

export const SearchBar = ({
  setfilterState,
  filterState,
  setrunExample,
}: props) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    const keyDownHandler = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        e.preventDefault();
        setrunExample(true);
      }
    };
    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  return (
    <div className="flex mt-2 ml-1">
      {/* SEARCH BAR */}
      <form className="w-11/12">
        <label htmlFor="default-search" className="text-grayT-900 sr-only">
          Buscar...
        </label>
        <div className="flex">
          <input
            type="search"
            autoComplete="off"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
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
