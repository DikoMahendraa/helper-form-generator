export const generateInputCode = ({ input, validationLib }) => {
  const commonProps = `\n          name="input_${
    input.id
  }"\n          placeholder="${
    input.placeholder || `Enter your ${input.label}`
  }"\n          className="p-2 border rounded w-full outline-none mb-1"
  \n type="${input?.type}"`;
  const labelCode = ` <label className="block mb-2 mt-4 capitalize" htmlFor="input_${input?.id}">${input?.label}</label>`;

  const getErrorKey = ["yrhc", "zrhc"].includes(validationLib)
    ? "errors"
    : "validationErrors";
  const getMessageKey = ["yrhc", "zrhc"].includes(validationLib)
    ? ".message"
    : "";

  if (input?.type === "textarea") {
    return `${labelCode}
      <textarea ${
        ["yrhc", "zrhc"].includes(validationLib)
          ? `{...register("input_${input?.id}")}`
          : ""
      }
      id="input_${input?.id}" ${commonProps} />
    `;
  }

  return `${labelCode}
      <input ${
        ["yrhc", "zrhc"].includes(validationLib)
          ? `{...register("input_${input?.id}")}`
          : ""
      }
        id="input_${input?.id}"  
        ${commonProps} />

   ${
     validationLib
       ? `    {${getErrorKey}["input_${input?.id}"] && <p className="text-red-500 text-sm italic mb-2">
          {${getErrorKey}["input_${input?.id}"]${getMessageKey}}
        </p>}`
       : ""
   }

  `;
};
