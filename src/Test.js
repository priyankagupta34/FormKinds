import * as React from "react";
import { useFormContext } from "react-hook-form";

export default function Test() {
  const methods = useFormContext();
  console.log("methods ", methods);
  return <input {...methods.register("bill")} />;
}
