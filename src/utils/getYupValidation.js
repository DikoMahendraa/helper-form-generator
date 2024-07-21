export const getYupValidation = (input) => {
  if (input.type === "email") {
    return "yup.string().email('Invalid email').required('This field is required')";
  }
  return "yup.string().required('This field is required')";
};
