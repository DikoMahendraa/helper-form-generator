import { getYupValidation } from "./getYupValidation";
import { getZodValidation } from "./getZodValidation";

export const generateValidationSchema = ({ inputs, validationLib }) => {
  if (["zrhc", "zod"].includes(validationLib)) {
    return `const schema = z.object({
${inputs
  ?.map((input) => `input_${input?.id}: ${getZodValidation(input)}`)
  .join(",\n  ")}
});`;
  } else if (["yrhc", "yup"].includes(validationLib)) {
    return `const schema = yup.object().shape({
${inputs
  ?.map((input) => `input_${input?.id}: ${getYupValidation(input)}`)
  .join(",\n  ")}
});`;
  }

  return "";
};
