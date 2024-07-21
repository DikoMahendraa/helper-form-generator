export const getYupValidation = (input) => {
  if (input.type === "email") {
    return "yup.string().email('Invalid email').required('This field is required')";
  } else if (input.type === "file") {
    return `yup.mixed()
      .test('fileSize', 'File size should not exceed 2 MB', value => !value || (value.size <= 2 * 1024 * 1024))
      .test('fileSize', 'File size should be at least 2 KB', value => !value || (value.size >= 2 * 1024))
      .required('${input.name} is required')`;
  }
  return "yup.string().required('This field is required')";
};
