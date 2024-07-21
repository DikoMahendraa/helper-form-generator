import { FileScan } from "lucide-react";
import React, { useState } from "react";

const GeneratedForm = ({ inputs, showCode, setShowCode }) => {
  const [formData, setFormData] = useState({});
  const [fileName, setFileName] = useState("");

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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div className="w-full lg:grid-cols-1 p-4 border-2 border-gray-500/50 rounded shadow">
      <h1 className="text-white mb-6 font-semibold text-lg uppercase">
        General UI
      </h1>
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
            ) : input.type === "file" ? (
              <div className="relative">
                <input
                  type="file"
                  id="file-input"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  onChange={handleFileChange}
                />
                <label
                  htmlFor="file-input"
                  className="flex items-center justify-between px-3 py-2 bg-white text-gray-800 rounded-lg shadow-md cursor-pointer hover:bg-gray-700 transition-colors"
                >
                  <span className="truncate">{fileName || input.label}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v8m0 0v-8M12 16l-4-4m4 4l4-4"
                    />
                  </svg>
                </label>
              </div>
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
