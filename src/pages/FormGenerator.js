import { z } from "zod";
import React, { useState } from "react";

const schema = z.object({
  input_0: z.string().min(1, { message: "This field is required" }),
  input_1: z.string().min(1, { message: "This field is required" }),
  input_2: z
    .instanceof(File)
    .refine((file) => file.size <= 2 * 1024 * 1024, {
      message: "File size should not exceed 2 MB",
    })
    .refine((file) => file.size >= 2 * 1024, {
      message: "File size should be at least 2 KB",
    })
    .nullable()
    .refine((file) => file !== null, {
      message: "${input.name} is required",
    }),
  input_3: z.string().min(1, { message: "This field is required" }),
  input_4: z.string().min(1, { message: "This field is required" }),
});

const GeneratedForm = () => {
  const [formData, setFormData] = useState({});
  const [validationErrors, setValidationErrors] = useState({});

  const validateForm = (formData) => {
    try {
      schema.parse(formData);
      return {}; // No errors if validation passes
    } catch (error) {
      return error.formErrors.fieldErrors;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    const errors = validateForm(formData);
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
    } else {
      setValidationErrors({});
      console.log("Form data:", formData);
      // Handle form submission logic here (e.g., API call)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-1/2 p-4 bg-white rounded shadow">
      <label className="block mb-2 mt-4 capitalize" htmlFor="input_0">
        Username
      </label>

      <input
        id="input_0"
        type="text"
        name="input_0"
        placeholder="Enter your Username"
        className="p-2 border rounded w-full outline-none mb-1"
      />

      {validationErrors["input_0"] && (
        <p className="text-red-500 text-sm italic mb-2">
          {validationErrors["input_0"]}
        </p>
      )}

      <label className="block mb-2 mt-4 capitalize" htmlFor="input_1">
        Email
      </label>

      <input
        id="input_1"
        type="text"
        name="input_1"
        placeholder="Enter your Email"
        className="p-2 border rounded w-full outline-none mb-1"
      />

      {validationErrors["input_1"] && (
        <p className="text-red-500 text-sm italic mb-2">
          {validationErrors["input_1"]}
        </p>
      )}

      <label className="block mb-2 mt-4 capitalize" htmlFor="input_2">
        Upload Documents
      </label>

      <input
        id="input_2"
        type="file"
        name="input_2"
        placeholder="Enter your Upload Documents"
        className="p-2 border rounded w-full outline-none mb-1"
      />

      {validationErrors["input_2"] && (
        <p className="text-red-500 text-sm italic mb-2">
          {validationErrors["input_2"]}
        </p>
      )}

      <label className="block mb-2 mt-4 capitalize" htmlFor="input_3">
        Password
      </label>

      <input
        id="input_3"
        type="text"
        name="input_3"
        placeholder="Enter your Password"
        className="p-2 border rounded w-full outline-none mb-1"
      />

      {validationErrors["input_3"] && (
        <p className="text-red-500 text-sm italic mb-2">
          {validationErrors["input_3"]}
        </p>
      )}

      <label className="block mb-2 mt-4 capitalize" htmlFor="input_4">
        Confirm Password
      </label>

      <input
        id="input_4"
        type="text"
        name="input_4"
        placeholder="Enter your Confirm Password"
        className="p-2 border rounded w-full outline-none mb-1"
      />

      {validationErrors["input_4"] && (
        <p className="text-red-500 text-sm italic mb-2">
          {validationErrors["input_4"]}
        </p>
      )}

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
