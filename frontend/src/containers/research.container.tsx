import React from "react";
import FilterSVG from "../assets/svg/filter.svg";
import SearchSVG from "../assets/svg/search.svg";
import ResearchCard from "../components/research_card.component";
import SearchBar from "../components/search_bar.component";

const ResearchContainer = () => {
  return (
    <div className="absolute bg-transparent w-4/12 right-0">
      {/* SEARCH BAR */}
      <div className="flex mt-4">
        {/* SEARCH */}
        <div className="flex rounded-md drop-shadow-xl border-2 border-gray-500 h-fit w-full mt-2 px-2">
          <SearchBar />
        </div>

        {/* FILTER BUTTON */}
        <button className="rounded-xl bg-blue-600 hover:bg-blue-800 m-2 p-2">
          <FilterSVG
            classname="text-white fill-current h-6"
            title={false}
          />
        </button>
      </div>

      {/* RESEARCH CARDS */}
      <div className="">
        <ResearchCard />
        <ResearchCard />
        <ResearchCard />
      </div>
    </div>
  );
};

export default ResearchContainer;
