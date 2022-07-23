import CytoscapeComponent from "react-cytoscapejs";
import cytoscape from "cytoscape";
// @ts-ignore: Unreachable code error
import cola from "cytoscape-cola";

cytoscape.use(cola);

export const GraphContainer = () => {
  /* const elements = [
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
      data: { source: "three", target: "one", label: "Edge from Node1 to Node2" },
    },
    {
      data: { source: "four", target: "one", label: "Edge from Node1 to Node2" },
    },
    {
      data: { source: "five", target: "two", label: "Edge from Node1 to Node2" },
    },
    {
      data: { source: "six", target: "three", label: "Edge from Node1 to Node2" },
    },
    {
      data: { source: "seven", target: "four", label: "Edge from Node1 to Node2" },
    },
    {
      data: { source: "eight", target: "five", label: "Edge from Node1 to Node2" },
    },
    {
      data: { source: "nine", target: "six", label: "Edge from Node1 to Node2" },
    },
    {
      data: { source: "ten", target: "eight", label: "Edge from Node1 to Node2" },
    },
  ]; */

  const elements = [
    { data: { id: "semilla", label: "medicine for diagnostics" } },
    {
      data: {
        id: "32",
        label:
          "Optimization of treatment and diagnosis plan for critically ill patients                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        ",
      },
    },
    { data: { source: "semilla", target: "32", label: "0.4838457703590393" } },
    {
      data: {
        id: "33",
        label:
          "Optimization of treatment and diagnosis plan for critically ill patients                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        ",
      },
    },
    { data: { source: "semilla", target: "33", label: "0.4838457703590393" } },
    {
      data: {
        id: "31",
        label:
          "Optimization of treatment and diagnosis plan for critically ill patients                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        ",
      },
    },
    { data: { source: "semilla", target: "31", label: "0.4838457703590393" } },
    {
      data: {
        id: "881",
        label:
          "The comprehensive evaluation of therapeutic drugs for pediatric novel coronavirus pneumonia (COVID-19)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      },
    },
    {
      data: { source: "semilla", target: "881", label: "0.47649073600769043" },
    },
    {
      data: {
        id: "3241",
        label:
          "Perks of Methylprednisolone for Hospitalized COVID-19 Patients: A Clinical Trial",
      },
    },
    {
      data: { source: "semilla", target: "3241", label: "0.4658949077129364" },
    },
    {
      data: {
        id: "13882",
        label:
          "A comparative study of the effectiveness between pulse regimen methylprednisolone versus high dose dexamethasone as the initial treatment of moderate Covid-19 pneumonia: An open-label randomized controlled trial                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             ",
      },
    },
    {
      data: {
        source: "semilla",
        target: "13882",
        label: "0.44272762537002563",
      },
    },
    {
      data: {
        id: "518",
        label:
          "Clinical efficacy of novel coronavirus infection treated by combination of interferon regimen and Ritonavir Tablets                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             ",
      },
    },
    { data: { source: "semilla", target: "518", label: "0.439807653427124" } },
    {
      data: {
        id: "479",
        label:
          "Clinical guidance of diagnose and treatment for novel coronavirus pneumonia (COVID-19) based on ''Shi-Du-Yi''                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   ",
      },
    },
    { data: { source: "semilla", target: "479", label: "0.4386032521724701" } },
    {
      data: {
        id: "72",
        label:
          "Chinese medicine prevention and treatment program for novel coronavirus pneumonia (COVID-19)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ",
      },
    },
    { data: { source: "semilla", target: "72", label: "0.437133252620697" } },
    {
      data: {
        id: "81",
        label:
          "Chinese medicine prevention and treatment program for novel coronavirus pneumonia (COVID-19)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ",
      },
    },
    { data: { source: "semilla", target: "81", label: "0.437133252620697" } },
    {
      data: {
        id: "1101",
        label:
          "Comprehensive mental and physical health assessment and intervention studies for novel coronavirus pneumonia (COVID-19) patients                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ",
      },
    },
    { data: { source: "881", target: "1101", label: "0.8305282592773438" } },
    {
      data: {
        id: "200",
        label:
          "Identification and Clinical Treatment of Severe novel coronavirus pneumonia (COVID-19) Patients                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 ",
      },
    },
    { data: { source: "881", target: "200", label: "0.8199098706245422" } },
    {
      data: {
        id: "375",
        label:
          "A prospective cohort  study on recovering patients with novel coronavirus pneumonia (COVID-19) by comprehensive treatment of Chinese medicine                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   ",
      },
    },
    { data: { source: "881", target: "375", label: "0.8171838521957397" } },
    {
      data: {
        id: "684",
        label:
          "A retrospective study for evolution and clinical outcomes of novel coronavirus pneumonia (COVID-19) patients                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ",
      },
    },
    { data: { source: "881", target: "684", label: "0.8080321550369263" } },
    {
      data: {
        id: "205",
        label:
          "Clinical observation and research plan of novel coronavirus pneumonia (COVID-19) patients                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       ",
      },
    },
    { data: { source: "881", target: "205", label: "0.8075156211853027" } },
    {
      data: {
        id: "87",
        label:
          "A Randomized Controlled Trial for Integrated Traditional Chinese Medicine and Western Medicine in the Treatment of Common Type Novel Coronavirus Pneumonia (COVID-19)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           ",
      },
    },
    { data: { source: "881", target: "87", label: "0.8039169311523438" } },
    {
      data: {
        id: "27",
        label:
          "Clinical Trial for Integrated Chinese and Western Medicine in the Treatment of Children with Novel Coronavirus Pneumonia (COVID-19)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             ",
      },
    },
    { data: { source: "881", target: "27", label: "0.8031315803527832" } },
    {
      data: {
        id: "4768",
        label:
          "A follow-up study about clinically diagnosed cases of novel coronavirus pneumonia (COVID-19)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ",
      },
    },
    { data: { source: "881", target: "4768", label: "0.800548255443573" } },
    {
      data: {
        id: "155",
        label:
          "Optimization Protocal of Integrated Traditional Chinese and Western Medicine Treatment for Novel Coronavirus Pneumonia (COVID-19)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               ",
      },
    },
    { data: { source: "881", target: "155", label: "0.7982857823371887" } },
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
