// src/components/FormGenerator.js
import React, { useState } from "react";
import GeneratedForm from "./GeneratedForm";
import GeneratedCode from "./GeneratedCode";

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
    <div className="flex gap-4">
      <div className="w-1/2 p-4 bg-gray-100 rounded shadow">
        <button
          className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={addInput}
        >
          Tambah Input
        </button>
        <form onSubmit={handleSubmit}>
          {inputs.map((input, index) => (
            <div key={input.id} className="mb-4 flex items-center gap-4">
              <input
                className="block mb-2 p-2 border rounded w-full"
                type="text"
                placeholder="Label"
                value={input.label}
                onChange={(e) => handleLabelChange(index, e.target.value)}
              />
              <select
                className="block mb-2 p-2 border rounded w-full"
                onChange={(e) => handleTypeChange(index, e.target.value)}
                value={input.type}
              >
                <option value="text">Text</option>
                <option value="email">Email</option>
                <option value="password">Password</option>
                <option value="textarea">Textarea</option>
              </select>
              <input
                className="block mb-2 p-2 border rounded w-full"
                type="text"
                placeholder="Placeholder"
                value={input.placeholder}
                onChange={(e) => handlePlaceholderChange(index, e.target.value)}
              />
            </div>
          ))}
          {inputs.length > 0 && (
            <button
              className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
              type="submit"
            >
              Submit
            </button>
          )}
        </form>
        {inputs.length > 0 && (
          <div className="flex justify-center mt-4">
            <button
              className="mr-2 px-4 py-2 bg-purple-500 text-white rounded"
              onClick={generateCode}
            >
              Tampilkan Form
            </button>
            <button
              className="px-4 py-2 bg-purple-500 text-white rounded"
              onClick={showCodeBlock}
            >
              Lihat Kode
            </button>
          </div>
        )}
      </div>
      {showGeneratedForm && <GeneratedForm inputs={inputs} />}
      {showCode && <GeneratedCode inputs={inputs} />}
    </div>
  );
};

export default FormGenerator;
