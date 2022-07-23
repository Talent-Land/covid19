import React from "react";
import MapGraphicContainer from "./map_graphic.container";
import ResearchContainer from "./research.container";
import StatisticContainer from "./statistic.container";
import LogoAstraZeneca from "../assets/logo.png";

export const MainContainer = () => {
  return (
    <>
      <div className="flex absolute bg-blue-themeLighterAlt z-10">
        <MapGraphicContainer />
      </div>
      <div className="flex flex-col bg-blue-themeLighterAlt">
        <div className="flex place-content-start place-items-center bg-blue-themePrimary w-full h-12">
          <p className="text-3xl text-whiteT ml-10">ResearchSaver.com</p>
        </div>
        <div className="flex flex-row gap-10 overflow-y-auto">
          <div className="flex flex-col basis-8/12 mt-4">
            <StatisticContainer />
            {/* <ResearchInfoContainer/> */}
          </div>

          <div className="flex flex-col basis-4/12 mt-4 bg-transparent mr-10 overflow-y-auto">
            <ResearchContainer />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContainer;
