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
        email
      </label>
      <input
        id="input_0"
        type="text"
        name="input_0"
        placeholder=""
        className="p-2 border rounded w-full"
      />
      <label className="block mb-2" htmlFor="input_1">
        first name
      </label>
      <input
        id="input_1"
        type="text"
        name="input_1"
        placeholder=""
        className="p-2 border rounded w-full"
      />
      <label className="block mb-2" htmlFor="input_2">
        last name
      </label>
      <input
        id="input_2"
        type="text"
        name="input_2"
        placeholder=""
        className="p-2 border rounded w-full"
      />
      <label className="block mb-2" htmlFor="input_3">
        password
      </label>
      <input
        id="input_3"
        type="text"
        name="input_3"
        placeholder=""
        className="p-2 border rounded w-full"
      />
      <label className="block mb-2" htmlFor="input_4">
        confirm password
      </label>
      <input
        id="input_4"
        type="text"
        name="input_4"
        placeholder=""
        className="p-2 border rounded w-full"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default GeneratedForm;
