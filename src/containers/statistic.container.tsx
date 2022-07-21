import React from "react";
import Button from "../components/button.component";
import StatisticCard from "../components/statistic_card.component";
import ToggleButton from "../components/toggle_button.component";

export const StatisticContainer = () => {
  return (
    <div className="grid grid-cols-4 ml-2">
      {/* NUMBER OF RESEARCHS */}
      <StatisticCard title="TOTAL RESEARCHS" color="green-200">
        {/* RESEARCH CONTENT */}
        <div>HOW MANY APPLES ARE ON THE TREE: 4</div>
      </StatisticCard>

      {/* NUMBER OF RESEARCHS MEN */}
      <StatisticCard title="MEN RESEARCH'S" color="red-200">
        {/* RESEARCH CONTENT */}
        <div>HOW MANY APPLES ARE ON THE TREE: 4</div>
      </StatisticCard>

      {/* NUMBER OF RESEARCHS WOMEN */}
      <StatisticCard title="WOMEN RESEARCH'S" color="purple-200">
        {/* RESEARCH CONTENT */}
        <div>HOW MANY APPLES ARE ON THE TREE: 4</div>
      </StatisticCard>

      {/* NUMBER OF */}
      <StatisticCard title="SEPA" color="blue-200">
        {/* RESEARCH CONTENT */}
        <div>HOW MANY APPLES ARE ON THE TREE: 4</div>
      </StatisticCard>
    </div>
  );
};

export default StatisticContainer;
