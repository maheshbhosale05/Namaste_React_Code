import { useFormik } from "formik";
import React from "react";

export const LoginForm = () => {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validate: () => ({}),
    onSubmit: () => {},
  });
  return (
    <div>
      <h1>Login Form</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email</label>
        <br />
        <br />
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}

        <br />
        <br />
        <br />
        <br />

        <label htmlFor="password">Password</label>
        <br />
        <br />
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.errors.password ? <div>{formik.errors.password}</div> : null}

        <br />
        <br />
        <br />
        <br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
