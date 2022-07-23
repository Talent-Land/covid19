import React, { useState } from "react";
import CrossSVG from "../assets/svg/cross.svg";
import { GoogleMap } from "../components/map.component";

interface props {}

const ResearchInfoContainer = ({}: props) => {
  return (
    <div className="flex flex-col flex-grow absolute w-8/12 ml-4 mt-20 mr-4">
      <div className="flex flex-col rounded-md bg-blue-themePrimary/75 mr-16 mt-2">
        {/* CLOSE */}
        <div className="flex flex-col place-items-end">
          <button>
            <CrossSVG classname="text-blackT fill-current h-6" title={false} />{" "}
          </button>
        </div>

        {/* FIRST ROW */}
        <div className="flex p-2 text-blackT">
          <p className="flex flex-grow text-xl font-bold rounded-md py-1 mb-2 mr-2">
            ESTE ES UN EJEMPLO DEL TITULO PUBLICO DE UN RESEARCH
          </p>

          <div className="flex w-3/12">
            <p className="block mb-2 text-md text-wine-themePrimary font-medium mr-2">
              Inclusion age:
            </p>
            <p className="flex flex-grow bg-blue-themeDarker text-whiteT rounded-md shadow-md px-2 py-1 mb-2 mr-2">
              INFO
            </p>
          </div>
        </div>

        {/* SECOND ROW */}
        <div className="flex flex-row p-2 text-blackT ">
          <div className="flex w-8/12">
            <p className="block mb-2 text-md font-medium mr-2">
              Covid-while-coviing
            </p>
            <p className="flex flex-grow bg-whiteT rounded-md shadow-md px-2 py-1 mb-2 mr-2">
              INFO
            </p>
          </div>
          <div className="flex w-4/12">
            <p className="block mb-2 text-md font-medium mr-2">Publish date:</p>
            <p className="flex flex-grow bg-whiteT rounded-md shadow-md px-2 py-1 mb-2 mr-2">
              INFO
            </p>
          </div>
        </div>

        {/* THIRD ROW */}
        <div className="flex flex-row w-full p-2 text-blackT ">
          <div className="flex w-6/12">
            <p className="block mb-2 text-md font-medium mr-2">
              Results posted in:
            </p>
            <p className="flex flex-grow bg-whiteT rounded-md shadow-md px-2 mb-2 mr-2">
              INFO
            </p>
          </div>
          <div className="flex w-6/12">
            <p className="block mb-2 text-md font-medium mr-2">
              Results completed in:
            </p>
            <p className="flex flex-grow bg-whiteT rounded-md shadow-md px-2 mb-2 mr-2">
              INFO
            </p>
          </div>
        </div>

        {/* FOURTH ROW */}
        <div className="flex flex-row w-full p-2 text-blackT">
          <div className="w-7/12">
            <div className="w-full p-2 text-blackT">
              <div className="flex">
                <p className="block mb-2 text-md font-medium mr-2">URL: </p>
                <p className="flex flex-grow bg-whiteT rounded-md shadow-md px-2 mb-2 mr-2">
                  INFO
                </p>
              </div>
            </div>

            <div className="w-full p-2 text-blackT">
              <div className="flex">
                <p className="block mb-2 text-md font-medium mr-2">Phase</p>
                <p className="flex flex-grow bg-whiteT rounded-md shadow-md px-2 mb-2 mr-2">
                  INFO
                </p>
              </div>
            </div>

            <div className="w-full p-2 text-blackT ">
              <div className="flex">
                <p className="block mb-2 text-md font-medium mr-2">
                  Contact name:
                </p>
                <p className="flex flex-grow bg-whiteT rounded-md shadow-md px-2 mb-2 mr-2">
                  INFO
                </p>
              </div>
            </div>

            <div className="w-full p-2 text-blackT">
              <div className="flex">
                <p className="block mb-2 text-md font-medium mr-2">
                  Contact Address:
                </p>
                <p className="flex flex-grow bg-whiteT rounded-md shadow-md px-2 mb-2 mr-2">
                  INFO
                </p>
              </div>
            </div>

            <div className="w-full p-2 text-blackT border-2 border-blackT">
              <div className="">
                {/* <GoogleMap /> */}
              </div>
            </div>
          </div>

          <div className="w-5/12">
            <div className="flex flex-col w-full p-2 text-blackT ">
              <div className="bg-whiteT rounded-md shadow-md px-2 mb-2 mr-2">
                Map
              </div>
            </div>
            <div className="flex flex-col w-full p-2 text-blackT ">
              <div className="bg-whiteT rounded-md shadow-md px-2 mb-2 mr-2">
                content de source registry
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row self-end w-8/12 p-2 text-blackT">
          <div className="flex flex-grow">
            <p className="block mb-2 text-md font-medium mr-2">
              Source registry:
            </p>
            <p className="flex flex-grow bg-whiteT rounded-md shadow-md px-2 mb-2 mr-2">
              INFO
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchInfoContainer;
