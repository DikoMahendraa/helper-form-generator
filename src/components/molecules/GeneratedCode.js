import { Atom, Copy, RefreshCcw } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript";
import ListReferences from "./ListReferences";
import Button from "../atoms/button";

const GeneratedCode = ({ inputs }) => {
  const [copied, setCopied] = useState(false);
  const [validationLib, setValidationLib] = useState(null);

  useEffect(() => {
    Prism.highlightAll();
  }, [inputs.length, validationLib]);

  const generateInputCode = (input) => {
    const commonProps = `\n          name="input_${
      input.id
    }"\n          placeholder="${
      input.placeholder || `Enter your ${input.label}`
    }"\n          className="p-2 border rounded w-full outline-none mb-1"`;
    const labelCode = ` <label className="block mb-2 mt-4 capitalize" htmlFor="input_${input.id}">${input.label}</label> \n`;

    const getErrorKey = ["yrhc", "zrhc"].includes(validationLib)
      ? "errors"
      : "validationErrors";
    const getMessageKey = ["yrhc", "zrhc"].includes(validationLib)
      ? ".message"
      : "";

    if (input.type === "textarea") {
      return `${labelCode}
        <textarea ${
          ["yrhc", "zrhc"].includes(validationLib)
            ? `{...register("input_${input.id}")}`
            : ""
        }
          id="input_${input.id}" ${commonProps} />
      `;
    }
    return `${labelCode}
        <input ${
          ["yrhc", "zrhc"].includes(validationLib)
            ? `{...register("input_${input.id}")}`
            : ""
        }
          id="input_${input.id}"  
          type="${input.type}" ${commonProps} />

     ${
       validationLib
         ? `    {${getErrorKey}["input_${input.id}"] && <p className="text-red-500 text-sm italic mb-2">
            {${getErrorKey}["input_${input.id}"]${getMessageKey}}
          </p>}`
         : ""
     }
  
    `;
  };

  const generateValidationSchema = (inputs, lib) => {
    if (["zrhc", "zod"].includes(lib)) {
      return `const schema = z.object({
  ${inputs
    .map((input) => `input_${input.id}: ${getZodValidation(input)}`)
    .join(",\n  ")}
  });`;
    } else if (["yrhc", "yup"].includes(lib)) {
      return `const schema = yup.object().shape({
  ${inputs
    .map((input) => `input_${input.id}: ${getYupValidation(input)}`)
    .join(",\n  ")}
  });`;
    }
    return "";
  };

  const getZodValidation = (input) => {
    if (input.type === "email") {
      return "z.string({message: 'this field is required'}).email('Invalid email').min(1, {message: 'This field is required'})";
    }
    return "z.string().min(1, {message: 'This field is required'})";
  };

  const getYupValidation = (input) => {
    if (input.type === "email") {
      return "yup.string().email('Invalid email').required('This field is required')";
    }
    return "yup.string().required('This field is required')";
  };

  const generateFormCode = (inputs, lib) => {
    if (!lib) {
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
        ${inputs.map(generateInputCode).join("\n      ")}
        <button type="submit" className="px-4 py-2 bg-cyan-500 mt-4 text-white rounded">Submit</button>
      </form>
    );
  };
  
  export default GeneratedForm;
      `;
    }

    if (lib === "zod") {
      return `
  import { z } from "zod";
  import React, { useState } from 'react';
  
  ${generateValidationSchema(inputs, lib)}
  
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
        ${inputs.map(generateInputCode).join("\n      ")}
        <button type="submit" className="px-4 py-2 bg-cyan-500 mt-4 text-white rounded">Submit</button>
      </form>
    );
  };
  
  export default GeneratedForm;
      `;
    }

    if (lib === "yup") {
      return `
  import * as yup from "yup";
  import React, { useState } from 'react';
  
  ${generateValidationSchema(inputs, lib)}
  
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
        ${inputs.map(generateInputCode).join("\n      ")}
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
    lib?.includes("zrhc")
      ? `
  import { z } from 'zod';
  import { zodResolver } from '@hookform/resolvers/zod';`
      : ""
  }
  ${
    lib?.includes("yrhc")
      ? `
  import * as yup from 'yup';
  import { yupResolver } from '@hookform/resolvers/yup';`
      : ""
  }
  
  ${generateValidationSchema(inputs, lib)}
  
  const GeneratedForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
      resolver: ${
        lib.includes("zrhc") ? "zodResolver(schema)" : "yupResolver(schema)"
      },
    });
  
    const onSubmit = (data) => {
      console.log(data);
    };
  
    return (
      <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 p-4 bg-white rounded shadow">
        ${inputs.map(generateInputCode).join("\n      ")}
        <button type="submit" className="px-4 py-2 bg-cyan-500 mt-4 text-white rounded">Submit</button>
      </form>
    );
  };
  
  export default GeneratedForm;
    `;
  };

  const code = generateFormCode(inputs, validationLib);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    });
  };

  const onIntegrationWith = useCallback(
    (type) => {
      setValidationLib(type);
    },
    [setValidationLib]
  );

  return (
    <>
      <div className="w-full mt-12 p-4 bg-gray-800 text-white rounded shadow">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold flex items-center gap-2">
            <Atom /> Generated React Code:
          </h3>
        </div>

        <div className="my-8">
          <h5 className="mb-4">Integration with</h5>
          <div className="flex flex-wrap gap-2">
            <Button
              onclick={() => onIntegrationWith("")}
              text="Default"
              icon={<RefreshCcw size={18} />}
            />
            <Button
              onclick={() => onIntegrationWith("zod")}
              text="Zod Validation"
              image="https://zod.dev/logo.svg"
            />
            <Button
              onclick={() => onIntegrationWith("yup")}
              text="Yup Validation"
              image="https://miro.medium.com/v2/resize:fit:1067/1*8pLiWUrglmnzfBYf1XJ4TA.jpeg"
            />
            <Button
              onclick={() => onIntegrationWith("zrhc")}
              text="Zod + RHF"
              image="https://pbs.twimg.com/profile_images/1373527896472489987/YjVZynHb_400x400.jpg"
            />
            <Button
              onclick={() => onIntegrationWith("yrhc")}
              text="Yup + RHF"
              image="https://pbs.twimg.com/profile_images/1373527896472489987/YjVZynHb_400x400.jpg"
            />
          </div>
          <ListReferences />
        </div>
        <div className="relative">
          <div className="absolute right-0">
            <button
              className="px-4 py-2 flex lg:text-sm text-xs items-center gap-2 bg-cyan-500 text-white rounded"
              onClick={copyToClipboard}
            >
              <Copy size={14} />
              {copied ? (
                <span className="text-xs italic text-white">
                  copied successfully!
                </span>
              ) : (
                <span className="hidden lg:inline">Copy</span>
              )}
            </button>
          </div>
          <pre className="whitespace-pre-wrap p-4 bg-gray-900 rounded break-words">
            <code className="language-javascript !text-xs lg:!text-base">
              {code}
            </code>
          </pre>
        </div>
      </div>
    </>
  );
};

export default GeneratedCode;
