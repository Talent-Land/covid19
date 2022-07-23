import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import "../App.css";
import { NotFound } from "../components/not_found_404.component";
import { Sandbox } from "../components/sandbox.component";
import MainContainer from "../containers/main.container";
import {
  getAllClinicalResearch,
  getAllCountries,
  getAllGenders,
  getAllStudyTypes,
  getCountryClinicalResearch,
} from "../api/api.endpoint";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<MainContainer />} />
        {/* <Route path="/sandbox" element={<Sandbox />} /> */}
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

const Layout = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <div className="h-10 w-full flex flex-shrink-0 bg-blue-themePrimary">
        <p className="text-3xl text-whiteT ml-10">ResearchSaver.com</p>
      </div>
      <Outlet />
    </div>
  );
};

export default App;
