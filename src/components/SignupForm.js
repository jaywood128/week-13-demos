import React, { useState } from "react";
import useForm from "./useForm";

const SignUp = () => {
  /* to-do
    replace useState Hook with useForm
    review on the pass Synthentic Event to onchange handler
    review importance of name field on html element
   */

  const [value, handleChange] = useForm({
    year: "",
    name: "",
    email: "",
    password: "",
    checkbox: false,
  });
  // const [year, setYear] = useState("");
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [checkbox, setCheckbox] = useState("");

  function handle() {
    // console.log("year:", year);
    // console.log("name:", name);
    // console.log("email:", email);
    // console.log("password:", password);
    // console.log("checkbox:", checkbox);
  }
  console.log("hello");

  return (
    <>
      <h1>Hello</h1>
      <select
        name='year'
        value={value.year}
        onChange={(e) => {
          handleChange(e.target.value);
        }}
      >
        <option>Freshman</option>
        <option>Sophmore</option>
        <option>Junior</option>
        <option>Senior</option>
      </select>
      <div>Name</div>
      <input
        type='text'
        name='name'
        onChange={handleChange}
        value={value.name}
      />
      <div>Email</div>
      <input type='text' value={value.email} onChange={handleChange} />
      <div>Password</div>
      <input type='text' value={value.password} onChange={handleChange} />
      <div>
        <input type='checkbox' value={value.checkbox} onChange={handleChange} />
        Rememeber me
      </div>
      <button onClick={handle}>Submit</button>
    </>
  );
};

export default SignUp;
