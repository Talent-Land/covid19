import CytoscapeComponent from "react-cytoscapejs";
import cytoscape from "cytoscape";
// @ts-ignore: Unreachable code error
import cola from "cytoscape-cola";

cytoscape.use(cola);

export const GraphContainer = () => {
  const elements = [
    { data: { id: "semilla", label: "medicine for diagnostics" } },
    { data: { id: "32", label: "Analysis of clinical char" } },
    { data: { source: "semilla", target: "32", label: "0.4838457703590393" } },
    { data: { id: "33", label: "Clinical Application of E" } },
    { data: { source: "semilla", target: "33", label: "0.4838457703590393" } },
    { data: { id: "31", label: "Immunomodulatory Therapy " } },
    { data: { source: "semilla", target: "31", label: "0.4838457703590393" } },
    { data: { id: "881", label: "The comprehensive evaluat" } },
    {
      data: { source: "semilla", target: "881", label: "0.47649073600769043" },
    },
    { data: { id: "3241", label: "Methylprednisolone in COV" } },
    {
      data: { source: "semilla", target: "3241", label: "0.4658949077129364" },
    },
    { data: { id: "13882", label: "A comparative study of th" } },
    {
      data: {
        source: "semilla",
        target: "13882",
        label: "0.44272762537002563",
      },
    },
    { data: { id: "518", label: "Efficacy and optimization" } },
    { data: { source: "semilla", target: "518", label: "0.439807653427124" } },
    { data: { id: "479", label: "Cancelled by the investig" } },
    { data: { source: "semilla", target: "479", label: "0.4386032521724701" } },
    { data: { id: "72", label: "Chinese medicine preventi" } },
    { data: { source: "semilla", target: "72", label: "0.437133252620697" } },
    { data: { id: "81", label: "Chinese medicine preventi" } },
    { data: { source: "semilla", target: "81", label: "0.437133252620697" } },
    { data: { id: "1101", label: "Comprehensive mental and " } },
    { data: { source: "881", target: "1101", label: "0.8305282592773438" } },
    { data: { id: "200", label: "Identification and Clinic" } },
    { data: { source: "881", target: "200", label: "0.8199098706245422" } },
    { data: { id: "375", label: "A prospective cohort  stu" } },
    { data: { source: "881", target: "375", label: "0.8171838521957397" } },
    { data: { id: "684", label: "A retrospective study for" } },
    { data: { source: "881", target: "684", label: "0.8080321550369263" } },
    { data: { id: "205", label: "Clinical observation and " } },
    { data: { source: "881", target: "205", label: "0.8075156211853027" } },
    { data: { id: "87", label: "A Randomized Controlled T" } },
    { data: { source: "881", target: "87", label: "0.8039169311523438" } },
    { data: { id: "27", label: "Clinical Trial for Integr" } },
    { data: { source: "881", target: "27", label: "0.8031315803527832" } },
    { data: { id: "4768", label: "A follow-up study about c" } },
    { data: { source: "881", target: "4768", label: "0.800548255443573" } },
    { data: { id: "155", label: "Optimization Protocal of " } },
    { data: { source: "881", target: "155", label: "0.7982857823371887" } },
    { data: { id: "7046", label: "Exercise training and COV" } },
    { data: { source: "87", target: "7046", label: "0.6203353404998779" } },
    { data: { id: "2412", label: "A Gamified Network for Su" } },
    { data: { source: "87", target: "2412", label: "0.5848409533500671" } },
    { data: { id: "1977", label: "Proactive Care of Ambulat" } },
    { data: { source: "87", target: "1977", label: "0.5684233903884888" } },
    { data: { id: "3132", label: "Randomised controlled tri" } },
    { data: { source: "87", target: "3132", label: "0.5524756908416748" } },
    { data: { id: "7006", label: "Effect of a Brief Psychol" } },
    { data: { source: "87", target: "7006", label: "0.5515740513801575" } },
    { data: { id: "1850", label: "A Randomized Trial of Ant" } },
    { data: { source: "87", target: "1850", label: "0.5508886575698853" } },
    { data: { id: "9788", label: "FREEDOM COVID-19 Anticoag" } },
    { data: { source: "87", target: "9788", label: "0.5503870844841003" } },
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
