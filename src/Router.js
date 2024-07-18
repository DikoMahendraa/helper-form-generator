import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "./pages/FormGenerator";
import HomePage from "./pages/Home";

const RouterNavigation = () => {
  return (
    <Router>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<App />} path="/create-component" />
      </Routes>
    </Router>
  );
};

export default RouterNavigation;
