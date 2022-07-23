import CountrieSVG from "../assets/svg/countrie.svg";
import MarsSVG from "../assets/svg/mars.svg";
import VenusSVG from "../assets/svg/venus.svg";
import WorldSVG from "../assets/svg/world.svg";
import StatisticCard from "../components/cards/statistic_card.component";
import ToggleButton from "../components/buttons/toggle_button.component";
import MapContainer from "./map.container";
import { ChartsContainer } from "./charts.container";
import { GraphContainer } from "./graph.container";
import { useState } from "react";

export const StatisticContainer = () => {
  const [isWorld_active, setisWorld_active] = useState(true);
  const [isGraphic_active, setisGraphic_active] = useState(false);
  const [isNodeGraph_active, setisNodeGraph_active] = useState(false);

  return (
    <>
      <div className="flex flex-row">
        {/* NUMBER OF RESEARCHS */}
        <StatisticCard
          title="Global research"
          stat="12312312"
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
          title="Men research"
          stat="12312312"
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
          title="Women research"
          stat="12312312"
          color="text-redT-500"
          bordercolor="border-redT-500"
        >
          <div>
            <VenusSVG
              classname="text-redT-500 fill-current h-10"
              title={false}
            />
          </div>
        </StatisticCard>

        {/* NUMBER OF COUNTRIES */}
        <StatisticCard
          title="Countries research"
          stat="12312312"
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
      {isWorld_active && <MapContainer />}
      {isGraphic_active && <ChartsContainer />}
      {isNodeGraph_active && <GraphContainer />}
      <ToggleButton
        isWorld_active={isWorld_active}
        isGraphic_active={isGraphic_active}
        isNodeGraph_active={isNodeGraph_active}
        setisGraphic_active={setisGraphic_active}
        setisWorld_active={setisWorld_active}
        setisNodeGraph_active={setisNodeGraph_active}
      />
    </>
  );
};

export default StatisticContainer;
