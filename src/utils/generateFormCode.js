import { generateInputCode } from "./generateInputCode";
import { generateValidationSchema } from "./generateValidationSchema";

export const generateFormCode = ({ inputs, validationLib }) => {
  console.log("generateFormCode", inputs, validationLib);

  if (!validationLib) {
    return `
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
      ${inputs
        ?.map((input) => generateInputCode({ input, validationLib }))
        .join("\n      ")}
      <button type="submit" className="px-4 py-2 bg-cyan-500 mt-4 text-white rounded">Submit</button>
    </form>
  );
};

export default GeneratedForm;
    `;
  }

  if (validationLib === "zod") {
    return `
import { z } from "zod";
import React, { useState } from 'react';

${generateValidationSchema({ inputs, validationLib })}

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
      ${inputs
        .map((input) => generateInputCode({ input, validationLib }))
        .join("\n      ")}
      <button type="submit" className="px-4 py-2 bg-cyan-500 mt-4 text-white rounded">Submit</button>
    </form>
  );
};

export default GeneratedForm;
    `;
  }

  if (validationLib === "yup") {
    return `
import * as yup from "yup";
import React, { useState } from 'react';

${generateValidationSchema({ inputs, validationLib })}

const GeneratedForm = () => {
  const [formData, setFormData] = useState({});
  const [validationErrors, setValidationErrors] = useState({});

  const validateForm = async (formData) => {
    try {
      await schema.validate(formData, { abortEarly: false });
      return {}; // No errors if validation passes
    } catch (error) {
      return error.inner.reduce((errors, err) => {
        return {
          ...errors,
          [err.path]: err.message,
        };
      }, {});
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    const errors = await validateForm(formData);
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
      ${inputs
        .map((input) => generateInputCode({ input, validationLib }))
        .join("\n      ")}
      <button type="submit" className="px-4 py-2 bg-cyan-500 mt-4 text-white rounded">Submit</button>
    </form>
  );
};

export default GeneratedForm;
    `;
  }

  return `
import React from 'react';
import { useForm } from 'react-hook-form';
${
  validationLib?.includes("zrhc")
    ? `
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';`
    : ""
}
${
  validationLib?.includes("yrhc")
    ? `
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';`
    : ""
}

${generateValidationSchema({ inputs, validationLib })}

const GeneratedForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: ${
      validationLib.includes("zrhc")
        ? "zodResolver(schema)"
        : "yupResolver(schema)"
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 p-4 bg-white rounded shadow">
      ${inputs
        .map((input) => generateInputCode({ input, validationLib }))
        .join("\n      ")}
      <button type="submit" className="px-4 py-2 bg-cyan-500 mt-4 text-white rounded">Submit</button>
    </form>
  );
};

export default GeneratedForm;
  `;
};
