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
    <div className="rounded-md bg-grayT-200 h-fit mr-2 mt-2 pb-2">
      <div className="flex flex-col place-items-end ">
        {/* FILTER BUTTON */}
        <button
          onClick={() => {
            setfilterState(!filterState);
          }}
          className="rounded-xl bg-grayT-200 hover:bg-grayT-400 p-2"
        >
          <FilterSVG classname="text-blackT fill-current h-4" title={false} />
        </button>
      </div>

      {/* FILTERS */}
      <div className="ml-4 mt-2">
        <form className="flex flex-col">
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

          <div className="flex flex-col pt-4">
            <label htmlFor="Gender" className="pb-2">Gender</label>
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
