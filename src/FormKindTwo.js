import { useForm, Controller } from "react-hook-form";
import React from "react";

export default function FormKindTwo() {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      category: []
    }
  });

  return (
    <>
      <h1>Form 2</h1>

      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <Controller
          name="firstName"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <div className="blockKind">
              <label htmlFor="firstName">First Name</label>
              <input id="firstName" {...field} />
            </div>
          )}
        />

        <Controller
          name="lastName"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <div className="blockKind">
              <label htmlFor="lastName">Last Name</label>
              <input {...field} />
            </div>
          )}
        />

        <Controller
          name="category"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <div className="blockKind">
              <label htmlFor="category">Category</label>
              <div className="checkboxTre">
                <label htmlFor="cool">Cool</label>
                <input id="cool" {...field} type="checkbox" />
                <label htmlFor="hot">Hot</label>
                <input id="hot" {...field} type="checkbox" />
              </div>
            </div>
          )}
        />
      </form>
    </>
  );
}
