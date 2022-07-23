import React from "react";
import CountrieSVG from "../assets/svg/countrie.svg";
import MarsSVG from "../assets/svg/mars.svg";
import VenusSVG from "../assets/svg/venus.svg";
import WorldSVG from "../assets/svg/world.svg";
import StatisticCard from "../components/cards/statistic_card.component";
import ToggleButton from "../components/buttons/toggle_button.component";

export const StatisticContainer = () => {
  return (
    <div className="flex flex-col flex-grow ml-10 h-fit">
      <div className="flex flex-row">
        {/* NUMBER OF RESEARCHS */}
        <StatisticCard
          title="Global research"
          stat = "12312312"
          color="text-[#0BD4A1]"
          bordercolor="border-[#0BD4A1]"
        >
          <div>
            <WorldSVG classname="text-[#0BD4A1] fill-current h-10" title={false} />
          </div>
        </StatisticCard>

        {/* NUMBER OF RESEARCHS MEN */}
        <StatisticCard
          title="Men research"
          stat = "12312312"
          color="text-blueT-500"
          bordercolor="border-blueT-500"
        >
          <div>
            <MarsSVG classname="text-blueT-500 fill-current h-10" title={false} />
          </div>
        </StatisticCard>

        {/* NUMBER OF RESEARCHS WOMEN */}
        <StatisticCard
          title="Women research"
          stat = "12312312"
          color="text-redT-500"
          bordercolor="border-redT-500"
        >
          <div>
            <VenusSVG classname="text-redT-500 fill-current h-10" title={false} />
          </div>
        </StatisticCard>

        {/* NUMBER OF COUNTRIES */}
        <StatisticCard
          title="Countries research"
          stat = "12312312"
          color="text-[#D4CB15]"
          bordercolor="border-[#D4CB15]"
        >
          <div>
            <CountrieSVG classname="text-[#D4CB15] fill-current h-10" title={false} />
          </div>
        </StatisticCard>
      </div>
      <ToggleButton/>
    </div>
  );
};

export default StatisticContainer;
