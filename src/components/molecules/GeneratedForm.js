import { FileScan } from "lucide-react";
import React, { useState } from "react";

const GeneratedForm = ({ inputs, showCode, setShowCode }) => {
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
    <div className="lg:w-1/2 flex flex-col justify-between w-full p-4 border-2 border-gray-500/50 rounded shadow">
      <form onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <div key={input.id} className="mb-4">
            <label
              className="block mb-2 text-white"
              htmlFor={`input_${input.id}`}
            >
              {input.label}
            </label>
            {input.type === "textarea" ? (
              <textarea
                id={`input_${input.id}`}
                name={`input_${input.id}`}
                placeholder={input.placeholder || `Enter your ${input.label}`}
                className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={handleChange}
              />
            ) : (
              <input
                id={`input_${input.id}`}
                type={input.type}
                name={`input_${input.id}`}
                placeholder={input.placeholder || `Enter your ${input.label}`}
                className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={handleChange}
              />
            )}
          </div>
        ))}
        <div className="flex justify-end gap-4">
          <button
            type="button"
            className="px-4 py-2 bg-gray-400 text-white rounded"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-cyan-500/50 text-white rounded"
          >
            Submit
          </button>
        </div>
      </form>

      <div className="flex justify-center pt-6 gap-2 mt-6 border-t border-gray-500">
        <button
          className="px-2 flex justify-center items-center gap-2 w-full py-2 text-sm bg-cyan-600/50 disabled:bg-cyan-600/30 text-white rounded"
          onClick={setShowCode}
        >
          <FileScan size={20} /> {showCode ? "Hide" : "Generate"} Code
        </button>
      </div>
    </div>
  );
};

export default GeneratedForm;
