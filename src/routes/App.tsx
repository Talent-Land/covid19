import React from "react";
import "../App.css";
import MainContainer from "../containers/main.container";
import ResearchContainer from "../containers/research.container";
import StatisticContainer from "../containers/statistic.container";

function App() {
  return (
    <div className="flex w-screen h-screen">
      <div className="w-8/12 mt-4">
        <StatisticContainer />
        <MainContainer />
      </div>

      <ResearchContainer />
    </div>
  );
}

export default App;
