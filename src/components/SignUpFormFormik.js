import { useFormik } from "formik";

const SignUpFormFormik = () => {
  const validate = (values) => {
    let errors = {};
    console.log(values.password.length);

    /* Check if each field is included */
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    } else if (!values.name) {
      errors.name = "Required field";
    } else if (values.password.length < 8) {
      errors.password = "Password must atleast 8 Characters";
    }
    console.log(errors);
    return errors;
  };
  /* 
  initialize state with initialValues property
*/
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validateOnChange: false,
    validate: validate,
  });

  /* 

   */
  return (
    /* 
    Add onChange handler for forimk
    Add value from formik object 
     */
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input
          id='name'
          name='name'
          type='text'
          // each html input uses the handleChange callback function
          // id and name MUST match the property defined in initialValues
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <br />
        <label htmlFor='email'>Email</label>
        <input
          name='email'
          type='text'
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <br />
        <label htmlFor='password'>Password</label>
        <input
          name='password'
          type='text'
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password ? <div>{formik.errors.password}</div> : null}
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default SignUpFormFormik;
