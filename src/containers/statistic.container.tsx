import React from "react";
import MarsSVG from "../assets/svg/mars.svg";
import VenusSVG from "../assets/svg/venus.svg";
import WorldSVG from "../assets/svg/world.svg";
import StatisticCard from "../components/statistic_card.component";

export const StatisticContainer = () => {
  return (
    <div className="grid grid-cols-4 ml-2">
      {/* NUMBER OF RESEARCHS */}
      <StatisticCard title="TOTAL RESEARCHS" color="bg-green-200" bordercolor="border-green-400">
        <div><WorldSVG classname="text-black fill-current h-6" title={false}/></div>
      </StatisticCard>

      {/* NUMBER OF RESEARCHS MEN */}
      <StatisticCard title="MEN RESEARCHS" color="bg-red-200" bordercolor="border-red-400">
        <div><VenusSVG classname="text-black fill-current h-6" title={false}/></div>
      </StatisticCard>
 
      {/* NUMBER OF RESEARCHS WOMEN */}
      <StatisticCard title="WOMEN RESEARCHS" color="bg-purple-200" bordercolor="border-purple-400">
        <div><MarsSVG classname="text-black fill-current h-6" title={false}/></div>
      </StatisticCard>

      {/* NUMBER OF */}
      <StatisticCard title="SEPA" color="bg-blue-200" bordercolor="border-blue-400">
        <div>HOW MANY APPLES ARE ON THE TREE: 4</div>
      </StatisticCard>
    </div>
  );
};

export default StatisticContainer;
