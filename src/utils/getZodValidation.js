export const getZodValidation = (input) => {
  if (input?.type === "email") {
    return "z.string({message: 'this field is required'}).email('Invalid email').min(1, {message: 'This field is required'})";
  }
  return "z.string().min(1, {message: 'This field is required'})";
};
