import React, { useState } from "react";

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
      <label className="block mb-2" htmlFor="input_0">
        Label
      </label>
      <input
        id="input_0"
        type="text"
        name="input_0"
        placeholder=""
        className="p-2 border rounded w-full outline-none mb-2"
      />
      <label className="block mb-2" htmlFor="input_1">
        Email
      </label>
      <input
        id="input_1"
        type="text"
        name="input_1"
        placeholder=""
        className="p-2 border rounded w-full outline-none mb-2"
      />
      <label className="block mb-2" htmlFor="input_2">
        Password
      </label>
      <input
        id="input_2"
        type="password"
        name="input_2"
        placeholder=""
        className="p-2 border rounded w-full outline-none mb-2"
      />
      <label className="block mb-2" htmlFor="input_3">
        Confirm Password
      </label>
      <input
        id="input_3"
        type="text"
        name="input_3"
        placeholder=""
        className="p-2 border rounded w-full outline-none mb-2"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-cyan-500 mt-4 text-white rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default GeneratedForm;
