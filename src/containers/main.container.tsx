import ResearchContainer from "./research.container";
import StatisticContainer from "./statistic.container";
/* import LogoAstraZeneca from "../assets/logo.png"; */
import Calderon from "../assets/Calderon.png";
import ResearchInfoContainer from "./research_info.container";

export const MainContainer = () => {
  return (
    <>
      <div className="flex flex-col bg-transparent">
        <div className="flex place-content-start place-items-center bg-blue-themePrimary w-full h-12">
          <p className="text-3xl text-whiteT ml-10">ResearchSaver.com</p>
        </div>
        <div className="flex flex-row gap-4 overflow-y-auto">
          <div className="flex flex-col basis-8/12 m-4">
            <StatisticContainer />

            <div className="flex absolute bottom-0 m-2 ">
              <a
                href="https://www.youtube.com/watch?v=djV11Xbc914"
                target={"_blank"}
              >
                <img
                  src={Calderon}
                  alt="TechCauldron"
                  className="h-12 opacity-25 hover:opacity-100 cursor-pointer"
                />
              </a>
            </div>
          </div>

          <ResearchInfoContainer />

          <div className="flex flex-col basis-4/12 mt-4 bg-transparent mr-10 overflow-y-auto">
            <ResearchContainer />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContainer;
