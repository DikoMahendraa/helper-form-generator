import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import App from "./App";

const RouterNavigation = () => {
  return (
    <Router>
      <Routes>
        <Route element={<LandingPage />} path="/" />
        <Route element={<App />} path="/create-component" />
      </Routes>
    </Router>
  );
};

export default RouterNavigation;
