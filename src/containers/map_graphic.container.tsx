import React from "react";
import ToggleButton from "./../components/buttons/toggle_button.component";
import Plot from "react-plotly.js";

export const MapGraphicContainer = () => {
  return (
    <div className="flex flex-col">
      <Plot
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: "choropleth",
            
            mode: "lines+markers",
            marker: { color: "red" },
          },
          { type: "bar", x: [1, 2, 3], y: [2, 5, 3] },
        ]}
        layout={{ width: 320, height: 240, title: "A Fancy Plot" }}
      />
    </div>
  );
};

export default MapGraphicContainer;
