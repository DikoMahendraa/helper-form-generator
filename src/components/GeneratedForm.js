import React, { useState } from "react";

const GeneratedForm = ({ inputs }) => {
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
    <div className="lg:w-1/2 w-full p-4 border-2 border-gray-500/50 rounded shadow">
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
                className="p-2 border rounded w-full"
                onChange={handleChange}
              />
            ) : (
              <input
                id={`input_${input.id}`}
                type={input.type}
                name={`input_${input.id}`}
                placeholder={input.placeholder || `Enter your ${input.label}`}
                className="p-2 border rounded w-full"
                onChange={handleChange}
              />
            )}
          </div>
        ))}
        <button
          type="submit"
          className="px-4 py-2 bg-cyan-500/50 text-white rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default GeneratedForm;
