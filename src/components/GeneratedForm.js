// src/components/GeneratedForm.js
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
    <div className="w-1/2 p-4 bg-white rounded shadow">
      <form onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <div key={input.id} className="mb-4">
            <label className="block mb-2" htmlFor={`input_${input.id}`}>
              {input.label}
            </label>
            {input.type === "textarea" ? (
              <textarea
                id={`input_${input.id}`}
                name={`input_${input.id}`}
                placeholder={input.placeholder}
                className="p-2 border rounded w-full"
                onChange={handleChange}
              />
            ) : (
              <input
                id={`input_${input.id}`}
                type={input.type}
                name={`input_${input.id}`}
                placeholder={input.placeholder}
                className="p-2 border rounded w-full"
                onChange={handleChange}
              />
            )}
          </div>
        ))}
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default GeneratedForm;
