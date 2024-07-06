import React from "react";
import { useForm } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  input_0: yup
    .string()
    .email("Invalid email")
    .required("This field is required"),
  input_1: yup.string().required("This field is required"),
  input_2: yup.string().required("This field is required"),
  input_3: yup.string().required("This field is required"),
});

const GeneratedForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-1/2 p-4 bg-white rounded shadow"
    >
      <label className="block mb-2 mt-4 capitalize" htmlFor="input_0">
        email
      </label>
      <input
        {...register("input_0")}
        id="input_0"
        type="email"
        name="input_0"
        placeholder=""
        className="p-2 border rounded w-full outline-none mb-1"
      />

      {errors["input_0"] && (
        <p className="text-red-500 text-sm italic mb-2">
          {errors["input_0"].message}
        </p>
      )}

      <label className="block mb-2 mt-4 capitalize" htmlFor="input_1">
        username
      </label>
      <input
        {...register("input_1")}
        id="input_1"
        type="text"
        name="input_1"
        placeholder=""
        className="p-2 border rounded w-full outline-none mb-1"
      />

      {errors["input_1"] && (
        <p className="text-red-500 text-sm italic mb-2">
          {errors["input_1"].message}
        </p>
      )}

      <label className="block mb-2 mt-4 capitalize" htmlFor="input_2">
        password
      </label>
      <input
        {...register("input_2")}
        id="input_2"
        type="password"
        name="input_2"
        placeholder=""
        className="p-2 border rounded w-full outline-none mb-1"
      />

      {errors["input_2"] && (
        <p className="text-red-500 text-sm italic mb-2">
          {errors["input_2"].message}
        </p>
      )}

      <label className="block mb-2 mt-4 capitalize" htmlFor="input_3">
        confirm password
      </label>
      <input
        {...register("input_3")}
        id="input_3"
        type="text"
        name="input_3"
        placeholder=""
        className="p-2 border rounded w-full outline-none mb-1"
      />

      {errors["input_3"] && (
        <p className="text-red-500 text-sm italic mb-2">
          {errors["input_3"].message}
        </p>
      )}

      <button
        type="submit"
        className="px-4 py-2 bg-cyan-500 mt-4 text-white rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default GeneratedForm;
