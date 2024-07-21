import React from "react";
import FormGenerator from "../components/molecules/FormGenerator";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App container mx-auto p-4">
      <Link to="/">
        <button className="px-4 flex text-sm items-center mb-4 gap-2 py-1 text-white border-cyan-600/40 rounded-lg hover:bg-cyan-900/50 border-2">
          <ArrowLeft size={16} /> Back
        </button>
      </Link>
      <FormGenerator />
    </div>
  );
}

export default App;
