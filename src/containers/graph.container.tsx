import CytoscapeComponent from "react-cytoscapejs";

export const GraphContainer = () => {
  const elements = [
    { data: { id: "one", label: "Node 1" }, position: { x: 300, y: 300 } },
    { data: { id: "two", label: "Node 2" }, position: { x: 400, y: 400 } },
    {
      data: { source: "one", target: "two", label: "Edge from Node1 to Node2" },
    },
  ];

  return (
    <div className="flex-auto flex grow justify-center items-center overflow-y-auto">
      <CytoscapeComponent
        elements={elements}
        className="w-full h-full"
      />
    </div>
  );
};
