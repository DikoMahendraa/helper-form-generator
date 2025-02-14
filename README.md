# Simple Form Generator

![Demo](demo.gif)

Create HTML forms effortlessly with just a few clicks! This tool allows you to generate and customize forms dynamically, and then easily copy the generated code into your project.

## Features

- **Easy Form Creation:** Generate forms by clicking on input types and options.
- **Customization:** Customize form elements such as input types, labels, and validation rules.
- **Code Generation:** Automatically generates HTML and JavaScript code based on your selections.
- **Copy to Clipboard:** One-click copy functionality for seamless integration into your projects.
- **Responsive Design:** Tailwind CSS styling ensures a modern and responsive user interface.

## Usage

1. **Select Input Types:** Click on the desired input types (text, email, checkbox, etc.).
2. **Customize Options:** Set labels, placeholder texts, and validation rules.
3. **Generate Code:** Click the "Generate Code" button to generate HTML and JavaScript.
4. **Copy to Clipboard:** Use the "Copy All Code" button to copy the generated code.
5. **Paste into Your Project:** Paste the copied code into your HTML file or React component.

## Example

```html
<!-- Generated Form Example -->
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
type="submit">Submit</button>
</form>
```
