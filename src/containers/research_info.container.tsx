import React, { useState } from "react";
import CountrieSVG from "../assets/svg/countrie.svg";
import CrossSVG from "../assets/svg/cross.svg";
import FilterSVG from "../assets/svg/filter.svg";
import MarsSVG from "../assets/svg/mars.svg";
import VenusSVG from "../assets/svg/venus.svg";
import WorldSVG from "../assets/svg/world.svg";
import StatisticCard from "../components/cards/statistic_card.component";

interface props {}

const ResearchInfoContainer = ({}: props) => {
  return (
    <div className="flex flex-col flex-grow absolute w-8/12 ml-10 mt-20">
      <div className="flex flex-col rounded-md bg-grayT-200 mr-10 mt-2 p-4">
        {/* CLOSE */}
        <div className="flex flex-col place-items-end">
          <button>
            <CrossSVG classname="text-blackT fill-current h-6" title={false} />{" "}
          </button>
        </div>

        <div className="flex flex-row w-full p-2 text-blackT border-blackT border-2">
          <div className="w-8/12">Public title</div>
          <div className="w-4/12">Inclusion age</div>
        </div>

        <div className="flex flex-row w-full p-2 text-blackT border-blackT border-2">
          <div className="w-8/12">Scientific title</div>
          <div className="w-4/12">Date published</div>
        </div>

        <div className="flex flex-row w-full p-2 text-blackT border-blackT border-2">
          <div className="w-4/12">Results date posted</div>
          <div className="w-4/12">Results date completed</div>
        </div>

        <div className="flex flex-row w-full p-2 text-blackT border-blackT border-2">
          <div className="w-7/12">
            <div className="w-full p-2 text-blackT border-blackT border-2">
              <div className="">Map</div>
            </div>

            <div className="w-full p-2 text-blackT border-blackT border-2">
              <div className="">Map</div>
            </div>

            <div className="w-full p-2 text-blackT border-blackT border-2">
              <div className="">Map</div>
            </div>

            <div className="w-full p-2 text-blackT border-blackT border-2">
              <div className="">Map</div>
            </div>

            <div className="w-full p-2 text-blackT border-blackT border-2">
              <div className="">Map</div>
            </div>
          </div>

          <div className="w-5/12">
            <div className="flex flex-col w-full p-2 text-blackT border-blackT border-2">
              <div className="">Map</div>
            </div>
            <div className="flex flex-col w-full p-2 text-blackT border-blackT border-2">
              <div className="">Map</div>
            </div>
          </div>
        </div>

        <div className="flex flex-row place-content-end w-full p-2 text-blackT border-blackT border-2">
          <div className="">Source registry</div>
        </div>
      </div>
    </div>
  );
};

export default ResearchInfoContainer;
