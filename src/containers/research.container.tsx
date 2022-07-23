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
