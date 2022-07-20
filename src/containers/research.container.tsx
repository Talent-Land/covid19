import React from "react";
import FilterSVG from "../assets/svg/filter.svg";
import SearchSVG from "../assets/svg/search.svg";
import ResearchCard from "../components/research_card.component";
import SearchBar from "../components/search_bar.component";

const ResearchContainer = () => {
  return (
    <div className='absolute bg-transparent w-4/12 right-0'>
        {/* SEARCH BAR */}
        <div className='flex rounded-md drop-shadow-xl border-2 border-gray-500 mr-2 my-2 p-2'>
            <SearchSVG classname="text-black fill-current h-4" title={false}/>
            <SearchBar/>
        </div>

        {/* RESEARCH CARDS */}
        <div className=''>
            <ResearchCard/>
            <ResearchCard/>
            <ResearchCard/>

        </div>
    </div>
  );
};

export default ResearchContainer;
