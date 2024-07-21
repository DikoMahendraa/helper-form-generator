import React, { useState } from "react";
import GeneratedForm from "./GeneratedForm";
import GeneratedCode from "./GeneratedCode";
import { PackagePlus, Trash2 } from "lucide-react";
import EmptyState from "./EmptyState";

const FormGenerator = () => {
  const [inputs, setInputs] = useState([]);
  const [showCode, setShowCode] = useState(false);

  const isEmptyState = inputs.length <= 0;

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = inputs.reduce((acc, input) => {
      acc[`input_${input.id}`] = input.value;
      return acc;
    }, {});
    console.log(formData);
  };

  const onRemoveInput = (input) => {
    const updateInputs = inputs.filter((item) => {
      return item.id !== input.id;
    });

    setInputs([...updateInputs]);
  };

  return (
    <div className="mx-auto">
      <div className="grid grid-cols-2 gap-4">
        <div
          className={`${
            !isEmptyState ? "lg:grid-cols-1" : "w-full"
          } w-full p-4 border-2 border-gray-500/50 rounded shadow`}
        >
          <h1 className="text-white mb-6 font-semibold text-lg uppercase">
            Create Form
          </h1>
          {isEmptyState && <EmptyState />}
          <form onSubmit={handleSubmit}>
            {inputs.map((input, index) => (
              <div
                key={input.id}
                className="mb-4 flex items-center gap-4 border-b border-gray-400 pb-4"
              >
                <div className="w-full text-xs">
                  <label className="text-white lg:text-base text-sm">
                    Label
                  </label>
                  <input
                    className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    type="text"
                    placeholder="Enter your label"
                    value={input.label}
                    onChange={(e) => handleLabelChange(index, e.target.value)}
                  />
                </div>
                <div className="w-full">
                  <label className="text-white lg:text-base text-sm">
                    Choose Type
                  </label>
                  <select
                    className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    onChange={(e) => handleTypeChange(index, e.target.value)}
                    value={input.type}
                  >
                    <option value="text">Text</option>
                    <option value="email">Email</option>
                    <option value="password">Password</option>
                    <option value="textarea">Textarea</option>
                    <option value="file">File Upload</option>
                  </select>
                </div>
                <div className="w-full">
                  <label className="text-white lg:text-base text-sm">
                    Placeholder
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm disabled:bg-gray-300"
                      type="text"
                      placeholder="Enter your placeholder"
                      value={input.placeholder}
                      onChange={(e) =>
                        handlePlaceholderChange(index, e.target.value)
                      }
                      disabled={input.type === "file"}
                    />
                    <button onClick={() => onRemoveInput(input)}>
                      <Trash2 color="red" size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </form>
          <div className="flex-col justify-center">
            <button
              className="mb-4 px-4 py-2 w-full justify-center flex items-center gap-2 text-sm bg-cyan-700 text-white rounded"
              onClick={addInput}
            >
              <PackagePlus /> New Component
            </button>
          </div>
        </div>

        {!isEmptyState && (
          <GeneratedForm
            setShowCode={() => setShowCode(!showCode)}
            showCode={showCode}
            inputs={inputs}
          />
        )}
      </div>

      {showCode && <GeneratedCode inputs={inputs} />}
    </div>
  );
};

export default FormGenerator;
