import CountrieSVG from "../assets/svg/countrie.svg";
import MarsSVG from "../assets/svg/mars.svg";
import VenusSVG from "../assets/svg/venus.svg";
import WorldSVG from "../assets/svg/world.svg";
import StatisticCard from "../components/cards/statistic_card.component";
import ToggleButton from "../components/buttons/toggle_button.component";
import MapContainer from "./map.container";
import { ChartsContainer } from "./charts.container";
import { GraphContainer } from "./graph.container";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface Props {
  runExample: boolean;
}

export const StatisticContainer = (props: Props) => {
  const { runExample } = props;

  const [visualization, setVisualization] = useState("map");

  const [titleComponent, settitleComponent] = useState("Research map");

  const returnVisualization = () => {
    if (visualization === "map") {
      return <MapContainer />;
    } else if (visualization === "charts") {
      return <ChartsContainer />;
    } else if (visualization === "graph") {
      return <GraphContainer />;
    }
  };

  useEffect(() => {
    if (runExample) {
      setVisualization("graph");
    }
  }, [runExample]);

  return (
    <>
      <div className="flex flex-row">
        {/* NUMBER OF RESEARCHS */}
        <StatisticCard
          title="Worldwide studies"
          stat="14,680"
          color="text-[#0BD4A1]"
          bordercolor="border-[#0BD4A1]"
        >
          <div>
            <WorldSVG
              classname="text-[#0BD4A1] fill-current h-10"
              title={false}
            />
          </div>
        </StatisticCard>

        {/* NUMBER OF RESEARCHS MEN */}
        <StatisticCard
          title="Studies on men"
          stat="10,000"
          color="text-blueT-500"
          bordercolor="border-blueT-500"
        >
          <div>
            <MarsSVG
              classname="text-blueT-500 fill-current h-10"
              title={false}
            />
          </div>
        </StatisticCard>

        {/* NUMBER OF RESEARCHS WOMEN */}
        <StatisticCard
          title="Studies on women"
          stat="4,680"
          color="text-pinkT-500"
          bordercolor="border-pinkT-500"
        >
          <div>
            <VenusSVG
              classname="text-pinkT-500 fill-current h-10"
              title={false}
            />
          </div>
        </StatisticCard>

        {/* NUMBER OF COUNTRIES */}
        <StatisticCard
          title="Participant countries"
          stat="249"
          color="text-[#D4CB15]"
          bordercolor="border-[#D4CB15]"
        >
          <div>
            <CountrieSVG
              classname="text-[#D4CB15] fill-current h-10"
              title={false}
            />
          </div>
        </StatisticCard>
      </div>

      <div className="flex flex-grow place-content-center justify-end rounded-md text-2xl text-blue-themePrimary font-bold">
        <div className="flex place-content-center w-full">{titleComponent}</div>
        <div className="flex">
          <ToggleButton
            visualization={visualization}
            setVisualization={setVisualization}
            settitleComponent={settitleComponent}
          />
        </div>
      </div>

      {returnVisualization()}
    </>
  );
};

export default StatisticContainer;
