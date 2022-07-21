import React from "react";
import MapGraphicContainer from "./map_graphic.container";
import ResearchContainer from "./research.container";
import StatisticContainer from "./statistic.container";

export const MainContainer = () => {
  return (
    <>
      <div className="flex absolute bg-blue-themeLighterAlt w-full h-full -z-10">
        <MapGraphicContainer />
      </div>

      <div className="flex flex-row w-full">
        <div className="flex flex-col basis-8/12 mt-4">
          <StatisticContainer />
        </div>

        <div className="flex flex-col basis-4/12 mt-4">
          <ResearchContainer />
        </div>
      </div>
    </>
  );
};

export default MainContainer;
