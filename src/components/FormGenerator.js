import React, { useState } from "react";
import GeneratedForm from "./GeneratedForm";
import GeneratedCode from "./GeneratedCode";
import { CircleAlert, FileScan, PackagePlus, Trash2 } from "lucide-react";

const EmptyState = () => {
  return (
    <div className="text-center w-full my-8 py-8 rounded-md">
      <div className="flex justify-center">
        <CircleAlert color="gray" size={32} />
      </div>
      <h2 className="text-xl mt-3 font-bold text-white mb-2">
        No Components Created Yet
      </h2>
      <p className="text-gray-500">
        Start creating components to see them here.
      </p>
    </div>
  );
};

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

  const showCodeBlock = () => {
    setShowCode(!showCode);
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
      <div className="flex lg:flex-row flex-col gap-4">
        <div
          className={`${
            !isEmptyState ? "lg:w-1/2" : "w-full"
          } w-full p-4 border-2 border-gray-500/50 rounded shadow`}
        >
          {isEmptyState && <EmptyState />}
          <form onSubmit={handleSubmit}>
            {inputs.map((input, index) => (
              <div
                key={input.id}
                className="mb-4 flex items-center gap-4 border-b border-gray-400 pb-4"
              >
                <div className="w-full text-xs">
                  <label className="text-white lg:text-base text-sm">
                    Lable
                  </label>
                  <input
                    className="block mt-1 px-2 py-1 lg:py-2 bg-[#1f2a38] outline-none text-gray-300 text-sm placeholder:text-xs placeholder:lg:text-base placeholder:text-gray-400 border rounded w-full"
                    type="text"
                    placeholder="Enter your lable"
                    value={input.label}
                    onChange={(e) => handleLabelChange(index, e.target.value)}
                  />
                </div>
                <div className="w-full">
                  <label className="text-white lg:text-base text-sm">
                    Choose Type
                  </label>
                  <select
                    className="block bg-[#1f2a38] text-white px-2 lg:py-2 py-[6px] text-xs lg:text-base border rounded w-full"
                    onChange={(e) => handleTypeChange(index, e.target.value)}
                    value={input.type}
                  >
                    <option value="text">Text</option>
                    <option value="email">Email</option>
                    <option value="password">Password</option>
                    <option value="textarea">Textarea</option>
                  </select>
                </div>
                <div className="w-full">
                  <label className="text-white lg:text-base text-sm">
                    Placeholder
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      className="block px-2 py-1 lg:py-2 bg-[#1f2a38] text-gray-300 placeholder:lg:text-base placeholder:text-xs lg:text-base outline-none text-sm placeholder:text-gray-400 border rounded w-full"
                      type="text"
                      placeholder="Enter your placeholder"
                      value={input.placeholder}
                      onChange={(e) =>
                        handlePlaceholderChange(index, e.target.value)
                      }
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
            {!isEmptyState && (
              <div className="flex justify-center mt-4 gap-2">
                <button
                  className="px-2 flex justify-center items-center gap-2 w-full py-2 text-sm bg-cyan-600/50 disabled:bg-cyan-600/30 text-white rounded"
                  onClick={showCodeBlock}
                >
                  <FileScan size={16} /> {showCode ? "Hide" : "Generate"} Code
                </button>
              </div>
            )}
          </div>
        </div>

        {!isEmptyState && <GeneratedForm inputs={inputs} />}
      </div>
      {showCode && <GeneratedCode inputs={inputs} />}
    </div>
  );
};

export default FormGenerator;
