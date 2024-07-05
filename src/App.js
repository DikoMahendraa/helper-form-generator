// src/App.js
import React from "react";
// import FormGenerator from "./components/FormGenerator";
import Result from "./components/Results";

function App() {
  return (
    <div className="App container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Form Generator</h1>
      <Result />
      {/* <FormGenerator /> */}
    </div>
  );
}

export default App;
