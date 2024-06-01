import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import React from "react";

export const LoginForm = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validate: (value) => {
      const errors = {};

      if (!value.email) {
        errors.email = "Email is Required.";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.email)
      ) {
        errors.email = "Invalid Email Address.";
      }

      if (!value.password) {
        errors.password = "Password is Required.";
      } else if (!/[A-Z]/.test(value.password)) {
        errors.password = "At least one uppercase letter.";
      } else if (!/[a-z]/.test(value.password)) {
        errors.password = "At least one lower letter.";
      } else if (!/[0-9]/.test(value.password)) {
        errors.password = "At least one digit.";
      } else if (!/[^A-Za-z0-9]/.test(value.password)) {
        errors.password = "At least one special symbol.";
      } else if (value.password.length < 8) {
        errors.password = "Atleast 8 character required.";
      }

      return errors;
    },
    onSubmit: (value, { setSubmitting, resetForm }) => {
      setTimeout(() => {
        navigate("/");
        setSubmitting(false);
        resetForm();
      }, 2000);
    },
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
          disabled={formik.isSubmitting}
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
          disabled={formik.isSubmitting}
        />
        {formik.errors.password ? <div>{formik.errors.password}</div> : null}

        <button type="submit" disabled={formik.isSubmitting}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
