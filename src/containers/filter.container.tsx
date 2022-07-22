import React, { Dispatch, SetStateAction } from "react";
import FilterSVG from "../assets/svg/filter.svg";
import MarsSVG from "../assets/svg/mars.svg";
import Button from "../components/button.component";

interface props {
  setfilterState: Dispatch<SetStateAction<boolean>>;
  filterState: boolean;
}

export const FilterContainer = ({ setfilterState, filterState }: props) => {
  return (
    <div className="rounded-xl bg-grayT-200 h-fit mr-2 mt-2 pb-2">
      <div className="flex flex-row">
        <div className="w-3/4">Filters</div>
        {/* FILTER BUTTON */}
        <div className="w-1/4 flex place-content-end">
        <button
          onClick={() => {
            setfilterState(!filterState);
          }}
          className="rounded-xl bg-grayT-200 hover:bg-grayT-400 p-2"
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
            <label htmlFor="Country">Select a country...</label>
            <select name="Country" id="country">
              <option value="Mexico">Mexico</option>
              <option value="Mexico">Mexico</option>
              <option value="Mexico">Mexico</option>
              <option value="Mexico">Mexico</option>
              <option value="Mexico">Mexico</option>
              <option value="Mexico">Mexico</option>
              <option value="Mexico">Mexico</option>
            </select>
          </div>

          {/* GENDER */}
          <div className="flex flex-col pt-4">
            <label htmlFor="Gender" className="pb-2">
              Gender
            </label>
            <div className="flex flex-row justify-between w-4/12">
              <button>
                <MarsSVG
                  classname="text-blackT fill-current h-8"
                  title={false}
                />
              </button>

              <button>
                <MarsSVG
                  classname="text-blackT fill-current h-8"
                  title={false}
                />
              </button>

              <button>
                <MarsSVG
                  classname="text-blackT fill-current h-8"
                  title={false}
                />
              </button>

              <button>
                <MarsSVG
                  classname="text-blackT fill-current h-8"
                  title={false}
                />
              </button>
            </div>
          </div>

          {/* INCLUSION AGE  */}
          <div>
            <label>Inclusion age:</label>
            <div className="flex">
              <div className="flex">
                <label className="" htmlFor="grid-zip">
                  min
                </label>
                <input className="" id="grid-zip" type="text" placeholder="0" />
              </div>
              <label className="" htmlFor="grid-zip">
                max
              </label>
              <input
                className=""
                id="grid-zip"
                type="text"
                placeholder="90210"
              />
            </div>
          </div>

          {/* STUDY TYPE */}
          <div className="flex flex-col">
            <label>Study type:</label>
            <div className="flex flex-row">
              <div className="flex flex-col">
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
                    Observational
                  </label>
                </div>

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
                    Observational
                  </label>
                </div>

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
                    Observational
                  </label>
                </div>
              </div>

              <div className="flex flex-col">
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
                    Observational
                  </label>
                </div>

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
                    Observational
                  </label>
                </div>

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
                    Observational
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* TARGET SIZE */}
          <div>
            <label>Target size:</label>
            <select name="TargetSize" id="targetSize">
              <option value="Muchos">0 - 100</option>
              <option value="Muchos">100 - 500</option>
              <option value="Muchos">500 - 2,000</option>
              <option value="Muchos">2,000 - 10,000</option>
              <option value="Muchos">+10,000</option>
            </select>
          </div>
        </form>
      </div>

      {/* SUBMIT AND CANCEL BUTTONS */}
      <div className="flex flex-col place-items-end">
        <div>
          <Button
            text={"Aplicar filtros"}
            color={"bg-blueT-400"}
            colorHover={"hover:bg-blueT-600"}
          />

          <Button
            text={"Cancelar"}
            color={"bg-redT-400"}
            colorHover={"hover:bg-redT-600"}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterContainer;
