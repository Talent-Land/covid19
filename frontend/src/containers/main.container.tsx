import React from "react";
import Button from "../components/button.component";
import ToggleButton from "../components/toggle_button.component";

export const MainContainer = () => {
  return (
    <div className='flex flex-col'>
      {/* TOP BAR */}
      <div className=''>
        <ToggleButton />
      </div>

      {/* MAP */}
      <div>
        <img src="../assets/mapacool.jpg" alt="mapa" />
      </div>
    </div>
  );
};

export default MainContainer;
