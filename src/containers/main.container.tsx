import ResearchContainer from "./research.container";
import StatisticContainer from "./statistic.container";
import LogoAstraZeneca from "../assets/logo.png";
import Calderon from "../assets/Calderon.png";
import LifeSaverSVG from "../assets/svg/life_saver.svg";
import { useState } from "react";

export const MainContainer = () => {
  const [runExample, setrunExample] = useState(false);

  return (
    <>
      <div className="flex flex-col bg-transparent overflow-y-auto">
        {/* NAVIGATION BAR */}
        <div className="flex place-content-between bg-blue-themePrimary w-full">
          <div className="flex flex-row content-center text-3xl text-whiteT ml-10">
            <img src={LogoAstraZeneca} alt="AstraZeneca" className="h-14" />
          </div>

          <div className="flex flex-row items-center text-3xl text-[#2f2874] mr-10 py-2">
            <LifeSaverSVG classname="fill-current h-8" title={false} />
            <p className="text-3xl font-bold ml-2 py-2">LifeSaver.com</p>
          </div>
        </div>

        <div className="flex flex-row gap-4 overflow-y-auto">
          <div className="flex flex-col basis-8/12 m-4">
            <StatisticContainer runExample={runExample} />
          </div>

          <div className="flex flex-col basis-4/12 mt-4 bg-transparent mr-10 overflow-y-auto">
            <ResearchContainer
              setrunExample={setrunExample}
              runExample={runExample}
            />
          </div>

          <div className="flex absolute h-full top-0  items-end ml-2 ">
            <a href="https://www.youtube.com/watch?v=djV11Xbc914">
              <img
                src={Calderon}
                alt="TechCauldron"
                className="h-12 opacity-25 hover:opacity-100 cursor-pointer"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContainer;
