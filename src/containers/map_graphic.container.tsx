import React from "react";
import ToggleButton from "./../components/buttons/toggle_button.component";
import Plot from "react-plotly.js";

export const MapGraphicContainer = () => {
  return (
    <div className="flex flex-col">
      <Plot
        data={[
          {
            type: "choropleth",
            locations: ["US", "CA", "IN", "NL", "BR"],
            z: [1, 2, 3, 4, 5],
            text: ["United States", "Canada", "India", "Netherlands", "Brazil"],
            colorscale: [
              [0, "rgb(5, 10, 172)"],
              [0.35, "rgb(40, 60, 190)"],
              [0.5, "rgb(70, 100, 245)"],
              [0.6, "rgb(90, 120, 245)"],
              [0.7, "rgb(106, 137, 247)"],
              [1, "rgb(220, 220, 220)"],
            ],
            reversescale: true,
            marker: {
              line: {
                color: "rgb(180,180,180)",
                width: 0.5,
              },
            },
            zmin: 0,
            colorbar: {
              tickprefix: "$",
              title: "GDP<br>Billions US$",
            },
          },
        ]}
        layout={{
          width: 320,
          height: 240,
          title:
            '2014 Global GDP<br>Source: <a href="https://www.cia.gov/library/publications/the-world-factbook/fields/2195.html"> CIA World Factbook</a>',
          geo: {
            showframe: false,
            showcoastlines: false,
            projection: {
              type: "mercator",
            },
          },
        }}
      />
    </div>
  );
};

export default MapGraphicContainer;
