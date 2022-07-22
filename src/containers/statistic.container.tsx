import React from "react";
import CountrieSVG from "../assets/svg/countrie.svg";
import MarsSVG from "../assets/svg/mars.svg";
import VenusSVG from "../assets/svg/venus.svg";
import WorldSVG from "../assets/svg/world.svg";
import StatisticCard from "../components/statistic_card.component";
import ToggleButton from "../components/toggle_button.component";

export const StatisticContainer = () => {
  return (
    <div className="flex flex-col flex-grow ml-2">
      <div className="flex flex-row">
        {/* NUMBER OF RESEARCHS */}
        <StatisticCard
          title="TOTAL RESEARCHS"
          color="bg-greenT-100"
          bordercolor="border-greenT-600"
        >
          <div>
            <WorldSVG classname="text-blackT fill-current h-6" title={false} />
          </div>
        </StatisticCard>

        {/* NUMBER OF RESEARCHS MEN */}
        <StatisticCard
          title="MEN RESEARCHS"
          color="bg-redT-100"
          bordercolor="border-redT-600"
        >
          <div>
            <MarsSVG classname="text-blackT fill-current h-6" title={false} />
          </div>
        </StatisticCard>

        {/* NUMBER OF RESEARCHS WOMEN */}
        <StatisticCard
          title="WOMEN RESEARCHS"
          color="bg-purpleT-100"
          bordercolor="border-purpleT-600"
        >
          <div>
            <VenusSVG classname="text-blackT fill-current h-6" title={false} />
          </div>
        </StatisticCard>

        {/* NUMBER OF COUNTRIES */}
        <StatisticCard
          title="COUNTRIES RESEARCH"
          color="bg-blueT-100"
          bordercolor="border-blueT-600"
        >
          <div>
            <CountrieSVG classname="text-blackT fill-current h-6" title={false} />
          </div>
        </StatisticCard>
      </div>
      <ToggleButton/>
    </div>
  );
};

export default StatisticContainer;
