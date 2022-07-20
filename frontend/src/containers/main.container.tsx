import React from "react";
import Button from "../components/button.component";
import ToggleButton from "../components/toggle_button.component";
import Mapitero from "../assets/mapacool.jpg";
export const MainContainer = () => {
  return (
    <div className="w-8/12">
      {/* TOP BAR */}
      <div className="flex place-content-center">
        <Button />
        <ToggleButton />
      </div>

      <img src={Mapitero} alt="mapa"/>
    </div>
  );
};

export default MainContainer;
