import React from "react";
import FilterSVG from "../assets/svg/filter.svg";
import SearchSVG from "../assets/svg/search.svg";
import ResearchCard from "../components/research_card.component";
import SearchBar from "../components/search_bar.component";

const ResearchContainer = () => {
  return (
    <div className="absolute bg-transparent w-4/12 right-0">
      {/* SEARCH BAR */}
      <div className="h-fit w-full">
          <SearchBar />
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
