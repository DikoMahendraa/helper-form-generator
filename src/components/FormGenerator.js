// src/components/FormGenerator.js
import React, { useState } from "react";
import GeneratedForm from "./GeneratedForm";
import GeneratedCode from "./GeneratedCode";
import { PackagePlus } from "lucide-react";

const FormGenerator = () => {
  const [inputs, setInputs] = useState([]);
  const [showCode, setShowCode] = useState(false);
  const [showGeneratedForm, setShowGeneratedForm] = useState(false);

  const addInput = () => {
    setInputs([
      ...inputs,
      {
        type: "text",
        id: inputs.length,
        label: "",
        placeholder: "",
        value: "",
      },
    ]);
  };

  const handleTypeChange = (index, type) => {
    const newInputs = inputs.slice();
    newInputs[index].type = type;
    setInputs(newInputs);
  };

  const handleLabelChange = (index, label) => {
    const newInputs = inputs.slice();
    newInputs[index].label = label;
    setInputs(newInputs);
  };

  const handlePlaceholderChange = (index, placeholder) => {
    const newInputs = inputs.slice();
    newInputs[index].placeholder = placeholder;
    setInputs(newInputs);
  };

  const generateCode = () => {
    setShowGeneratedForm(true);
    setShowCode(false);
  };

  const showCodeBlock = () => {
    setShowCode(true);
    setShowGeneratedForm(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = inputs.reduce((acc, input) => {
      acc[`input_${input.id}`] = input.value;
      return acc;
    }, {});
    console.log(formData);
  };

  return (
    <div className="flex lg:flex-row flex-col gap-4 mx-auto">
      <div className="lg:w-1/2 w-full p-4 border-2 border-gray-500/50 rounded shadow">
        <form onSubmit={handleSubmit}>
          {inputs.map((input, index) => (
            <div
              key={input.id}
              className="mb-4 flex items-center gap-4 border-b border-gray-400 pb-4"
            >
              <input
                className="block px-2 py-1 bg-[#1f2a38] outline-none text-white text-sm placeholder:text-sm placeholder:text-gray-400 border rounded w-full"
                type="text"
                placeholder="Label"
                value={input.label}
                onChange={(e) => handleLabelChange(index, e.target.value)}
              />
              <select
                className="block px-2 py-1 text-sm border rounded w-full"
                onChange={(e) => handleTypeChange(index, e.target.value)}
                value={input.type}
              >
                <option value="text">Text</option>
                <option value="email">Email</option>
                <option value="password">Password</option>
                <option value="textarea">Textarea</option>
              </select>
              <input
                className="block px-2 py-1 bg-[#1f2a38] text-white outline-none text-sm placeholder:text-sm placeholder:text-gray-400 border rounded w-full"
                type="text"
                placeholder="Placeholder"
                value={input.placeholder}
                onChange={(e) => handlePlaceholderChange(index, e.target.value)}
              />
            </div>
          ))}
        </form>
        {inputs.length > 0 && (
          <div className="flex-col justify-center">
            <button
              className="mb-4 px-4 py-2 w-full justify-center flex items-center gap-2 text-sm bg-cyan-700 text-white rounded"
              onClick={addInput}
            >
              <PackagePlus /> New Component
            </button>
            <div className="flex justify-center mt-4 gap-2">
              <button
                disabled={showGeneratedForm}
                className="px-4 py-2 w-full text-sm bg-cyan-600/50 disabled:bg-cyan-600/30 text-white rounded"
                onClick={generateCode}
              >
                Show UI
              </button>
              <button
                disabled={showCode}
                className="px-4 w-full py-2 text-sm bg-cyan-600/50 disabled:bg-cyan-600/30 text-white rounded"
                onClick={showCodeBlock}
              >
                Generate Code
              </button>
            </div>
          </div>
        )}
      </div>
      {showGeneratedForm && <GeneratedForm inputs={inputs} />}
      {showCode && <GeneratedCode inputs={inputs} />}
    </div>
  );
};

export default FormGenerator;
