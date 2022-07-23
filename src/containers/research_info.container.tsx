import React, { useState } from "react";
import CrossSVG from "../assets/svg/cross.svg";
import { GoogleMap } from "../components/map.component";

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
          <div className="w-8/12">Investigación de covid hecha mientras tenía covid</div>
          <div className="w-4/12">Inclusion age: 0 - 54</div>
        </div>

        <div className="flex flex-row w-full p-2 text-blackT border-blackT border-2">
          <div className="w-8/12">Covid-while-coviing</div>
          <div className="w-4/12">Publish date: Yesterday</div>
        </div>

        <div className="flex flex-row w-full p-2 text-blackT border-blackT border-2">
          <div className="w-4/12">Results posted in: 22 de Julio del 2022</div>
          <div className="w-4/12">Results completed in: 9 de Septiembre del 2022</div>
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
              <div className=""><GoogleMap/></div>
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
