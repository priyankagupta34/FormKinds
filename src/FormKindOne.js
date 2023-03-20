import React from "react";
import { useForm } from "react-hook-form";

import "./styles.css";

export default function FormKindOne() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      category: "",
      checkbox: [],
      radio: ""
    }
  });

  return (
    <form onSubmit={handleSubmit(console.log)}>
      <div className="formGrid">
        <span>First Name</span>
        <input {...register("firstName", { required: true })} />

        <span>Last Name</span>
        <input {...register("lastName", { minLength: 2 })} />

        <span>Category</span>
        <select {...register("category")}>
          <option value="">Select...</option>
          <option value="A">Category A</option>
          <option value="B">Category B</option>
        </select>
      </div>
      <div className="checkList">
        <span>Get Data</span>
        <input {...register("checkbox")} type="checkbox" value="A" />
        <input {...register("checkbox")} type="checkbox" value="B" />
        <input {...register("checkbox")} type="checkbox" value="C" />

        <input {...register("radio")} type="radio" value="A" />
        <input {...register("radio")} type="radio" value="B" />
        <input {...register("radio")} type="radio" value="C" />
      </div>
      <div className="submitBtn">
        <input type="submit" />
      </div>
    </form>
  );
}
