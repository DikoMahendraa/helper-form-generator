import React from "react";

const references = [
  { name: "Official Documentation Zod", url: "https://zod.dev/" },
  { name: "Official Documentation Yup", url: "https://github.com/jquense/yup" },
  {
    name: "Official Documentation React Hook Form",
    url: "https://react-hook-form.com/",
  },
  {
    name: "Dokumentasi Integrasi React Hook Form + Zod / Yup",
    url: "https://react-hook-form.com/get-started#SchemaValidation",
  },
];

const ListReferences = () => {
  return (
    <div className="lg:w-1/2 w-full mt-6  p-4 rounded-lg">
      <h2 className="lg:text-lg text-base font-bold mb-4">
        Official Documentation
      </h2>
      <ul className="list-disc pl-5 space-y-2">
        {references.map((ref, index) => (
          <li
            key={index}
            className="text-blue-500 lg:text-sm text-xs hover:underline"
          >
            <a href={ref.url} target="_blank" rel="noopener noreferrer">
              {ref.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListReferences;
