import Plot from "react-plotly.js";

export const MapContainer = () => {
  return (
    <div className="flex-auto flex grow justify-center items-center overflow-y-auto">
      <Plot
        data={[
          {
            type: "choropleth",
            locationmode: "ISO-3",
            locations: ["USA", "GBR", "FRA", "DEU", "ITA"],
            z: [100, 222, 32343, 4343, 54343],
            text: [
              "United States of America",
              "Great Britain",
              "France",
              "Germany",
              "Italy",
            ],
            colorscale: [
              [0, "#0071a1"],
              [0.35, "#0093d4"],
              [0.5, "#1aa0d9"],
              [0.6, "#a9dcf2"],
              [0.7, "#d0ecf8"],
              [1, "#f3fafd"],
            ],
            marker: {
              line: {
                color: "#0093d4",
                width: 0.5,
              },
            },
            fillcolor: '#a9dcf2',
            zmin: 0,
            showscale: false,
            automargin: true,
          },
        ]}
        layout={{
          height: window.innerHeight * 0.9,
          autosize: true,
          showlegend: false,
          hidesources: true,
          geo: {
            showframe: false,
            showcoastlines: false,
            showland: true,
            projection: {
              type: "mercator",
            },
          },
        }}
        config={{
          displayModeBar: false,
        }}
        className="w-full"
      />
    </div>
  );
};

export default MapContainer;
