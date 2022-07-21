import React from "react";
import Button from "../components/button.component";
import StatisticCard from "../components/statistic_card.component";
import ToggleButton from "../components/toggle_button.component";

export const StatisticContainer = () => {
  return (
      <div className="grid grid-cols-4">
        <StatisticCard />
        <StatisticCard />
        <StatisticCard />
        <StatisticCard />
      </div>
  );
};

export default StatisticContainer;
