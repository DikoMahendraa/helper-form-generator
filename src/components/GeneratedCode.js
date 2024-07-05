import { Atom, Copy } from "lucide-react";
import React, { useState } from "react";

const GeneratedCode = ({ inputs }) => {
  const [copied, setCopied] = useState(false);
  const generateInputCode = (input) => {
    const commonProps = `name="input_${input.id}" placeholder="${input.placeholder}" className="p-2 border rounded w-full outline-none mb-2"`;
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
      <button type="submit" className="px-4 py-2 bg-cyan-500 mt-4 text-white rounded">Submit</button>
    </form>
  );
};

export default GeneratedForm;
  `;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    });
  };

  return (
    <div className="lg:w-1/2 w-full p-4 bg-gray-800 text-white rounded shadow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold flex items-center gap-2">
          <Atom /> Generated React Code:
        </h3>
        <div className="flex items-center gap-2">
          {copied && (
            <span className="text-xs italic text-cyan-500">
              copied successfully!
            </span>
          )}
          <button
            className="px-4 py-2 flex text-sm items-center gap-2 bg-cyan-500 text-white rounded"
            onClick={copyToClipboard}
          >
            <Copy size={18} /> Copy
          </button>
        </div>
      </div>
      <pre className="whitespace-pre-wrap p-4 bg-gray-900 rounded">{code}</pre>
    </div>
  );
};

export default GeneratedCode;
