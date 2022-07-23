import AllWorldSVG from "../../assets/svg/all_world.svg";
import GraphicSVG from "../../assets/svg/graphic.svg";
import NodesSVG from "../../assets/svg/nodes.svg";

interface Props {
  isWorld_active: boolean;
  isGraphic_active: boolean;
  isNodeGraph_active: boolean;
  setisWorld_active: (value: boolean) => void;
  setisGraphic_active: (value: boolean) => void;
  setisNodeGraph_active: (value: boolean) => void;
}

export const ToggleButton = (props: Props) => {
  const {
    isWorld_active,
    isGraphic_active,
    isNodeGraph_active,
    setisWorld_active,
    setisGraphic_active,
    setisNodeGraph_active,
  } = props;

  return (
    <div className="flex bottom-0 justify-end mr-2">
      <div className="inline-flex rounded-xl shadow-md bg-grayT-200">
        <button
          onClick={() => {
            setisWorld_active(true);
            setisGraphic_active(false);
            setisNodeGraph_active(false);
          }}
          type="button"
          className={`${
            isWorld_active
              ? "bg-blue-themePrimary"
              : "bg-grayT-200 hover:bg-blue-themeLight"
          } rounded-l-xl px-4 py-2.5 `}
        >
          <AllWorldSVG
            classname={`${
              isWorld_active ? "text-whiteT " : "text-grayT-500"
            } text-black fill-current h-4`}
            title={false}
          />
        </button>

        <button
          onClick={() => {
            setisWorld_active(false);
            setisGraphic_active(true);
            setisNodeGraph_active(false);
          }}
          type="button"
          className={`${
            isGraphic_active
              ? "bg-blue-themePrimary"
              : "bg-grayT-200 hover:bg-blue-themeLight"
          } px-4 py-2.5`}
        >
          <GraphicSVG
            classname={`${
              isGraphic_active ? "text-whiteT" : "text-grayT-500"
            } text-black fill-current h-4`}
            title={false}
          />
        </button>

        <button
          onClick={() => {
            setisWorld_active(false);
            setisGraphic_active(false);
            setisNodeGraph_active(true);
          }}
          type="button"
          className={`${
            isNodeGraph_active
              ? "bg-blue-themePrimary"
              : "bg-grayT-200 hover:bg-blue-themeLight"
          } rounded-r-xl px-4 py-2.5`}
        >
          <NodesSVG
            classname={`${
              isNodeGraph_active ? "text-whiteT" : "text-grayT-500"
            } text-black fill-current h-4`}
            title={false}
          />
        </button>
      </div>
    </div>
  );
};

export default ToggleButton;
