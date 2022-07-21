import React from "react";
import Button from "../components/button.component";
import StatisticCard from "../components/statistic_card.component";
import ToggleButton from "../components/toggle_button.component";
import MapGraphicContainer from "./map_graphic.container";
import ResearchContainer from "./research.container";
import StatisticContainer from "./statistic.container";

export const MainContainer = () => {
  return (
    <>
      <div className="w-8/12 mt-4">
        <StatisticContainer />
        <MapGraphicContainer/>
      </div>

      <ResearchContainer />
    </>
  );
};

export default MainContainer;
