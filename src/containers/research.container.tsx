import React, { useState } from "react";
import ResearchCard from "../components/research_card.component";
import SearchBar from "../components/search_bar.component";
import FilterContainer from "./filter.container";

const ResearchContainer = () => {
  const [filterComponent, setfilterComponent] = useState(false);

  return (
    <div className="flex flex-col absolute bg-transparent">
      {/* SEARCH BAR */}
      <div className="">
        <SearchBar
          setfilterState={setfilterComponent}
          filterState={filterComponent}
        />
      </div>

      {/* RESEARCH CARDS */}
      <div className="">
        <ResearchCard
          title={"TEST 1"}
          content={
            "ESTO ES UN TEXTO PRUEBA QUE VA A TENER MUCHAS PALABRAS PARA VER COMO REACCIONA LA PANTALLA EN RELACION AL TAMAñO DE CARDS MUY GRANDES, QUE CAGADO SE VE LA ñ EN CHIQUITO, NO SE COMO PONERLA EN GRANTE PTM"
          }
        />

        <ResearchCard
          title={"TEST 1"}
          content={
            "ESTO ES UN TEXTO PRUEBA QUE VA A TENER MUCHAS PALABRAS PARA VER COMO REACCIONA LA PANTALLA EN RELACION AL TAMAñO DE CARDS MUY GRANDES, QUE CAGADO SE VE LA ñ EN CHIQUITO, NO SE COMO PONERLA EN GRANTE PTM"
          }
        />

        <ResearchCard
          title={"TEST 1"}
          content={
            "ESTO ES UN TEXTO PRUEBA QUE VA A TENER MUCHAS PALABRAS PARA VER COMO REACCIONA LA PANTALLA EN RELACION AL TAMAñO DE CARDS MUY GRANDES, QUE CAGADO SE VE LA ñ EN CHIQUITO, NO SE COMO PONERLA EN GRANTE PTM"
          }
        />

        <ResearchCard
          title={"TEST 1"}
          content={
            "ESTO ES UN TEXTO PRUEBA QUE VA A TENER MUCHAS PALABRAS PARA VER COMO REACCIONA LA PANTALLA EN RELACION AL TAMAñO DE CARDS MUY GRANDES, QUE CAGADO SE VE LA ñ EN CHIQUITO, NO SE COMO PONERLA EN GRANTE PTM"
          }
        />

        <ResearchCard
          title={"TEST 1"}
          content={
            "ESTO ES UN TEXTO PRUEBA QUE VA A TENER MUCHAS PALABRAS PARA VER COMO REACCIONA LA PANTALLA EN RELACION AL TAMAñO DE CARDS MUY GRANDES, QUE CAGADO SE VE LA ñ EN CHIQUITO, NO SE COMO PONERLA EN GRANTE PTM"
          }
        />

        <ResearchCard
          title={"TEST 1"}
          content={
            "ESTO ES UN TEXTO PRUEBA QUE VA A TENER MUCHAS PALABRAS PARA VER COMO REACCIONA LA PANTALLA EN RELACION AL TAMAñO DE CARDS MUY GRANDES, QUE CAGADO SE VE LA ñ EN CHIQUITO, NO SE COMO PONERLA EN GRANTE PTM"
          }
        />
      </div>

      {filterComponent ? (
        <div className="absolute w-full mr-4">
          <FilterContainer
            setfilterState={setfilterComponent}
            filterState={filterComponent}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ResearchContainer;
