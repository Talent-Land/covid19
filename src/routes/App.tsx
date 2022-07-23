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
    <div className="flex h-screen overflow-hidden">
      <Outlet />
    </div>
  );
};

export default App;
