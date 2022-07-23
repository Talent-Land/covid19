import React, { Dispatch, SetStateAction, useState } from "react";
import AllWorldSVG from "../assets/svg/all_world.svg";
import FilterSVG from "../assets/svg/filter.svg";
import GraphicSVG from "../assets/svg/graphic.svg";
import MarsSVG from "../assets/svg/mars.svg";
import VenusSVG from "../assets/svg/venus.svg";
import Button from "../components/buttons/button.component";

interface props {
  setfilterState: Dispatch<SetStateAction<boolean>>;
  filterState: boolean;
}

const studyTypeList = ["Prueba1", "Prueba2", "Prueba3", "Prueba4", "Prueba5"];

export const FilterContainer = ({ setfilterState, filterState }: props) => {
  const [isGender, setisGender] = useState("");
  const [isClickedFilters, setisClickedFilters] = useState(false);
  const [isClickedCancel, setisClickedCancel] = useState(false);

  const handleFilters = () => {
    if (isClickedFilters) {
      setfilterState(false);
    }
    if (isClickedCancel) {
      setfilterState(false);
    }
  };

  const handleGenderFilter = (state: string) => {
    setisGender(state);
    console.log(isGender);
  };

  return (
    <div className="rounded-xl bg-grayT-200 h-fit mr-2 mt-2 pb-2">
      <div className="flex flex-row">
        <div className="w-3/4 text-3xl mx-4 mt-4">Filters</div>
        {/* FILTER BUTTON */}
        <div className="w-1/4 flex place-content-end">
          <button
            onClick={() => {
              setfilterState(!filterState);
            }}
            className="rounded-xl bg-grayT-200 hover:bg-grayT-400 px-2 mb-4"
          >
            <FilterSVG classname="text-blackT fill-current h-4" title={false} />
          </button>
        </div>
      </div>

      {/* FILTERS */}
      <div className="mx-4 mt-2">
        <form className="flex flex-col">
          {/* COUNTRY */}
          <div className="flex flex-col pt-4">
            <label htmlFor="Country" className="block mb-2 text-md font-medium">
              Country:
            </label>
            <select
              name="Country"
              id="country"
              className="border border-blue-themePrimary text-grayT-900 text-sm rounded-md block w-full p-2.5"
            >
              <option selected disabled>
                Countries
              </option>
              <option value="Mexico">Mexico</option>
            </select>
          </div>

          {/* GENDER */}
          <div className="flex flex-row pt-4">
            <label
              htmlFor="Gender"
              className="block mb-2 mr-4 text-md font-medium"
            >
              Gender:
            </label>
            <div className="flex mr-2">
              <div className="inline-flex rounded-md  bg-whiteT">
                <button
                  onClick={() => handleGenderFilter("male")}
                  type="button"
                  className={`${
                    isGender === "male"
                      ? "bg-blueT-500 text-whiteT"
                      : "hover:bg-blueT-600 hover:text-whiteT"
                  } px-4 py-1 rounded-l-md border-r-2 border-grayT-400`}
                >
                  <MarsSVG classname={`fill-current h-6`} title={false} />
                </button>

                <button
                  onClick={() => handleGenderFilter("female")}
                  type="button"
                  className={`${
                    isGender === "female"
                      ? "bg-redT-500 text-whiteT"
                      : "hover:bg-redT-600 hover:text-whiteT"
                  } px-4 py-1 border-r-2 border-grayT-400`}
                >
                  <VenusSVG classname={`fill-current h-6`} title={false} />
                </button>

                <button
                  onClick={() => handleGenderFilter("not specified")}
                  type="button"
                  className={`${
                    isGender === "not specified"
                      ? "bg-purpleT-600 text-whiteT"
                      : "hover:bg-purpleT-800 hover:text-whiteT"
                  } px-4 py-1`}
                >
                  <AllWorldSVG
                    classname={` text-black fill-current h-6`}
                    title={false}
                  />
                </button>

                <button
                  onClick={() => handleGenderFilter("not known")}
                  type="button"
                  className={`${
                    isGender === "not known"
                      ? "bg-greenT-500 text-whiteT"
                      : "hover:bg-greenT-600 hover:text-whiteT"
                  } rounded-r-md px-4 py-1`}
                >
                  <GraphicSVG classname={`fill-current h-6`} title={false} />
                </button>
              </div>
            </div>
          </div>

          {/* INCLUSION AGE  */}
          <div className="pt-4">
            <label className="block mb-2 mr-4 text-md font-medium">
              Inclusion age:
            </label>

            <div className="flex flex-row w-8/12">
              <div className="flex">
                <label className="block mb-2 text-md pr-2" htmlFor="min-age">
                  min:
                </label>
                <input
                  className="border border-blue-themePrimary text-grayT-900 text-sm rounded-md w-full px-2.5"
                  id="min-age"
                  type="number"
                  max="120"
                  placeholder="0"
                />
              </div>

              <div className="flex">
                <label className="block mb-2 text-md px-2" htmlFor="max-age">
                  max:
                </label>
                <input
                  className="border border-blue-themePrimary text-grayT-900 text-sm rounded-md w-full px-2.5"
                  id="max-age"
                  type="number"
                  max="120"
                  placeholder="120"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-4">
            {/* STUDY TYPE */}
            <div className="flex flex-col pt-4">
              <label className="block mb-2 mr-4 text-md font-medium">
                Study type:
              </label>

              <div className="flex flex-row">
                <div className="flex flex-col mx-4">
                  {studyTypeList.map((studyType, index) => (
                    <div>
                      <input
                        id="link-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="link-checkbox"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        {studyType}
                      </label>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col mx-4">
                  {studyTypeList.map((studyType, index) => (
                    <div>
                      <input
                        id="link-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="link-checkbox"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        {studyType}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* TARGET SIZE */}
            <div className="pt-4">
              <label className="block mb-2 mr-4 text-md font-medium">
                Target size:
              </label>
              <select
                name="TargetSize"
                id="targetSize"
                className="border border-blue-themePrimary text-grayT-900 text-sm rounded-md block w-full p-2.5"
              >
                <option value="Muchos">0 - 100</option>
                <option value="Muchos">100 - 500</option>
                <option value="Muchos">500 - 2,000</option>
                <option value="Muchos">2,000 - 10,000</option>
                <option value="Muchos">+10,000</option>
              </select>
            </div>
          </div>
        </form>
      </div>

      {/* SUBMIT AND CANCEL BUTTONS */}
      <div className="flex flex-col place-items-end">
        <div>
          <Button
            text={"Aplicar filtros"}
            color={"bg-blue-themePrimary"}
            colorHover={"hover:bg-blue-themeDark"}
            isClicked={isClickedFilters}
            setisClicked={setisClickedFilters}
          />

          <Button
            text={"Cancelar"}
            color={"bg-redT-600"}
            colorHover={"hover:bg-redT-700"}
            isClicked={isClickedCancel}
            setisClicked={setisClickedCancel}
          />
          <>{handleFilters()}</>
        </div>
      </div>
    </div>
  );
};

export default FilterContainer;
