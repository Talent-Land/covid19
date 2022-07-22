import React, { useState } from "react";
import AllWorldSVG from "../../assets/svg/all_world.svg";
import GraphicSVG from "../../assets/svg/graphic.svg";

export const ToggleButton = () => {
  const [isWorld_active, setisWorld_active] = useState(true);
  const [isGraphic_active, setisGraphic_active] = useState(false);

  const handleWorldButton = () => {
    if (!isWorld_active) {
      setisWorld_active(true);
      setisGraphic_active(false);
    }
  };

  const handleGraphicButton = () => {
    if (!isGraphic_active) {
      setisGraphic_active(true);
      setisWorld_active(false);
    }
  };

  return (
    <div className="flex justify-end mr-2">
      <div className="inline-flex rounded-xl shadow-md">
        <button
          onClick={() => handleWorldButton()}
          type="button"
          className={`${isWorld_active ? "bg-blue-themePrimary" : "bg-grayT-200 hover:bg-blue-themeLight"} rounded-l-xl px-4 py-2.5 `}
        >
          <AllWorldSVG classname={`${isWorld_active ? "text-whiteT" : "text-grayT-500"} text-black fill-current h-4`} title={false} />
        </button>

        <button
        onClick={() => handleGraphicButton()}
          type="button"
          className={`${isGraphic_active ? "bg-blue-themePrimary" : "bg-grayT-200 hover:bg-blue-themeLight"} rounded-r-xl px-4 py-2.5`}
        >
          <GraphicSVG classname={`${isGraphic_active ? "text-whiteT" : "text-grayT-500"} text-black fill-current h-4`}  title={false} />
        </button>
      </div>
    </div>
  );
};

export default ToggleButton;
