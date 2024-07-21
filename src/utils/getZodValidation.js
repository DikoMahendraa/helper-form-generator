export const getZodValidation = (input) => {
  if (input?.type === "email") {
    return "z.string({message: 'this field is required'}).email('Invalid email').min(1, {message: 'This field is required'})";
  } else if (input?.type === "file") {
    return `
        z.instanceof(File)
          .refine(file => file !== null, {
            message: '${input.name || "document"} is required'
          })
          .refine(file => file.size <= 2 * 1024 * 1024, {
            message: 'File size should not exceed 2 MB',
          })
          .refine(file => file.size >= 2 * 1024, {
            message: 'File size should be at least 2 KB',
          })`;
  }

  return "z.string().min(1, {message: 'This field is required'})";
};
