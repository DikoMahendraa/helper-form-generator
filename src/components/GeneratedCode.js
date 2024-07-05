// src/components/GeneratedCode.js
import React from "react";

const GeneratedCode = ({ inputs }) => {
  const generateInputCode = (input) => {
    const commonProps = `name="input_${input.id}" placeholder="${input.placeholder}" className="p-2 border rounded w-full"`;
    const labelCode = `<label className="block mb-2" htmlFor="input_${input.id}">${input.label}</label>`;

    if (input.type === "textarea") {
      return `${labelCode}<textarea id="input_${input.id}" ${commonProps} />`;
    }
    return `${labelCode}<input id="input_${input.id}" type="${input.type}" ${commonProps} />`;
  };

  const code = `
import React, { useState } from 'react';

const GeneratedForm = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="w-1/2 p-4 bg-white rounded shadow">
      ${inputs.map(generateInputCode).join("\n      ")}
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Submit</button>
    </form>
  );
};

export default GeneratedForm;
  `;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code).then(() => {
      alert("Code copied to clipboard!");
    });
  };

  return (
    <div className="w-1/2 p-4 bg-gray-800 text-white rounded shadow relative">
      <h3 className="mb-2 text-lg font-bold">Generated React Code:</h3>
      <pre className="whitespace-pre-wrap p-4 bg-gray-900 rounded">{code}</pre>
      <button
        className="absolute top-4 right-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={copyToClipboard}
      >
        Copy All Code
      </button>
    </div>
  );
};

export default GeneratedCode;
