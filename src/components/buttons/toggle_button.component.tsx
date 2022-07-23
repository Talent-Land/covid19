import { Dispatch, SetStateAction } from "react";
import AllWorldSVG from "../../assets/svg/all_world.svg";
import GraphicSVG from "../../assets/svg/graphic.svg";
import NodesSVG from "../../assets/svg/nodes.svg";

interface Props {
  visualization: string;
  setVisualization: Dispatch<SetStateAction<string>>;
  settitleComponent: (value: string) => void;
}

export const ToggleButton = (props: Props) => {
  const { visualization, setVisualization, settitleComponent } = props;

  return (
    <div className="flex bottom-0 justify-end mr-2 max-h-8">
      <div className="inline-flex rounded-xl shadow-md bg-grayT-200">
        <button
          onClick={() => {
            setVisualization("map");
            settitleComponent("Research Map");
          }}
          type="button"
          className={`${
            visualization === "map"
              ? "bg-blue-themePrimary"
              : "bg-grayT-200 hover:bg-blue-themeLight"
          } rounded-l-xl px-4 py-2.5 `}
        >
          <AllWorldSVG
            classname={`${
              visualization === "map" ? "text-whiteT " : "text-grayT-500"
            } text-black fill-current h-4`}
            title={false}
          />
        </button>

        <button
          onClick={() => {
            setVisualization("charts");
            settitleComponent("Research graphics");
          }}
          type="button"
          className={`${
            visualization === "charts"
              ? "bg-blue-themePrimary"
              : "bg-grayT-200 hover:bg-blue-themeLight"
          } px-4 py-2.5`}
        >
          <GraphicSVG
            classname={`${
              visualization === "charts" ? "text-whiteT" : "text-grayT-500"
            } text-black fill-current h-4`}
            title={false}
          />
        </button>

        <button
          onClick={() => {
            setVisualization("graph");
            settitleComponent("Research graph");
          }}
          type="button"
          className={`${
            visualization === "graph"
              ? "bg-blue-themePrimary"
              : "bg-grayT-200 hover:bg-blue-themeLight"
          } rounded-r-xl px-4 py-2.5`}
        >
          <NodesSVG
            classname={`${
              visualization === "graph" ? "text-whiteT" : "text-grayT-500"
            } text-black fill-current h-4`}
            title={false}
          />
        </button>
      </div>
    </div>
  );
};

export default ToggleButton;
