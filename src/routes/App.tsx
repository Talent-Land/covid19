import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import "../App.css";
import MainContainer from "../containers/main.container";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<MainContainer />} />
      </Route>
    </Routes>
  );
}

const Layout = () => {
  return (
    <div className="flex w-screen h-screen">
      <Outlet />
    </div>
  );
};

export default App;
