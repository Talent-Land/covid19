import React, { useState } from "react";
import ResearchCard from "../components/cards/research_card.component";
import SearchBar from "../components/search_bar.component";
import FilterContainer from "./filter.container";

const ResearchContainer = () => {
  const [filterComponent, setfilterComponent] = useState(false);

  return (
    <>
      {/* SEARCH BAR */}
      <SearchBar
        setfilterState={setfilterComponent}
        filterState={filterComponent}
      />

      {/* RESEARCH CARDS */}
      <div className="flex-col overflow-y-auto">
        <ResearchCard
          title={"NCT00533741"}
          content={
            "Induction of Cytokines in Human Monocytes by SARS-CoV in Adults and Children"
          }
        />

        <ResearchCard
          title={"NCT00523276"}
          content={
            "Immune Responses, Transmission and Nucleotide Polymorphisms in Families With SARS Virus Infections"
          }
        />

        <ResearchCard
          title={"NCT00533741"}
          content={
            "Phase I, Double-Blinded, Placebo-Controlled Dosage Escalation Study of the Safety and Immunogenicity of Adjuvanted and Non-Adjuvanted Inactivated SARS Coronavirus (SARS-CoV) Vaccine Administered by the Intramuscular Route"
          }
        />

        <ResearchCard
          title={"NCT01376765"}
          content={
            "Phase I, Double-Blinded, Placebo-Controlled, Dose- Escalation Study of the Safety and Immunogenicity of Recombinant SARS-CoV deltaTM S Protein Vaccine Formulated With and Without Alhydrogel® in Healthy Adults When Administered by the Intramuscular Route"
          }
        />

        <ResearchCard
          title={"IRCT20180223038837N1"}
          content={
            "Comparative study of radiofrequency ablation & foam sclerothrapy for treatment patients suffering from great saphenous varicose vein"
          }
        />

        <ResearchCard
          title={"NCT04246242"}
          content={
            "A Randomized Multicenter Controlled Clinical Trial of Arbidol in Patients With 2019 Novel Coronavirus (2019-nCoV)"
          }
        />
      </div>

      {filterComponent ? (
        <div className="absolute transition ease-out delay-150 duration-300 ml-1">
          <FilterContainer
            setfilterState={setfilterComponent}
            filterState={filterComponent}
          />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ResearchContainer;
