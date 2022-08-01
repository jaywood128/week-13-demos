import { useState } from "react";

const useForm = (intialValues) => {
  const [values, setValues] = useState(intialValues);
  console.log(values);

  // Return a shallow copy of the piece of state
  // This will call setValues for every field in our form
  // This custom hook can be reused

  //to-do: ensure check box is getting saved to state and
  // signup form is using correct state values

  return [
    values,
    (e) => {
      console.log(e);
      if (e.type === "change" && e.target.name === "checkbox") {
        console.log(`Inside useForm ${e.target.value}`);
        setValues({ ...values, [e.target.name]: !values.checkbox });
      }
      if (e.type === "change") {
        console.log(`Inside useForm change ${e.target.value}`);
        setValues({ ...values, [e.target.name]: e.target.value });
      }
    },
  ];
};

export default useForm;
