import CytoscapeComponent from "react-cytoscapejs";
import cytoscape from "cytoscape";
// @ts-ignore: Unreachable code error
import cola from "cytoscape-cola";

cytoscape.use(cola);

export const GraphContainer = () => {
  const elements = [
    { data: { id: "one", label: "Pfizer" } },
    { data: { id: "two", label: "Efectos secundarios" } },
    { data: { id: "three", label: "Efectos secundarios" } },
    { data: { id: "four", label: "Efectos secundarios" } },
    { data: { id: "five", label: "Hombres" } },
    { data: { id: "six", label: "Hombres" } },
    { data: { id: "seven", label: "Hombres" } },
    { data: { id: "eight", label: "40 años" } },
    { data: { id: "nine", label: "40 años" } },
    { data: { id: "ten", label: "Hipertension" } },
    {
      data: { source: "two", target: "one", label: "Edge from Node1 to Node2" },
    },
    {
      data: {
        source: "three",
        target: "one",
        label: "Edge from Node1 to Node2",
      },
    },
    {
      data: {
        source: "four",
        target: "one",
        label: "Edge from Node1 to Node2",
      },
    },
    {
      data: {
        source: "five",
        target: "two",
        label: "Edge from Node1 to Node2",
      },
    },
    {
      data: {
        source: "six",
        target: "three",
        label: "Edge from Node1 to Node2",
      },
    },
    {
      data: {
        source: "seven",
        target: "four",
        label: "Edge from Node1 to Node2",
      },
    },
    {
      data: {
        source: "eight",
        target: "five",
        label: "Edge from Node1 to Node2",
      },
    },
    {
      data: {
        source: "nine",
        target: "six",
        label: "Edge from Node1 to Node2",
      },
    },
    {
      data: {
        source: "ten",
        target: "eight",
        label: "Edge from Node1 to Node2",
      },
    },
  ];

  const layout = { name: "cola" };

  return (
    <div className="flex-auto flex grow justify-center items-center overflow-y-auto">
      <CytoscapeComponent
        elements={elements}
        layout={layout}
        className="w-full h-full"
      />
    </div>
  );
};
