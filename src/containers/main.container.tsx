import ResearchContainer from "./research.container";
import StatisticContainer from "./statistic.container";
import LogoAstraZeneca from "../assets/logo.png";
import Calderon from "../assets/Calderon.png";
import ResearchInfoContainer from "./research_info.container";
import LifeSaverSVG from "../assets/svg/life_saver.svg";

export const MainContainer = () => {
  return (
    <>
      <div className="flex flex-col bg-transparent">
        <div className="flex place-content-between place-items-center bg-blue-themePrimary w-full h-12">
          {/* NAVIGATION BAR */}
          <div className="flex flex-row items-center text-3xl text-whiteT ml-10 py-2">
            <img src={LogoAstraZeneca} alt="AstraZeneca" className="h-8" />
            <p className="text-whiteT ml-2">AstraZeneca</p>
          </div>

          <div className="flex flex-row items-center text-3xl text-whiteT mr-10 py-2">
            <LifeSaverSVG
              classname="text-whiteT fill-current h-8"
              title={false}
            />
            <p className="text-3xl text-whiteT ml-2 py-2">LifeSaver.com</p>
          </div>
        </div>

        <div className="flex flex-row gap-4 overflow-y-auto">
          <div className="flex flex-col basis-8/12 m-4">
            <StatisticContainer />
            {/* <ResearchInfoContainer /> */}
          </div>

          <div className="flex flex-col basis-4/12 mt-4 bg-transparent mr-10 overflow-y-auto">
            <ResearchContainer />
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
