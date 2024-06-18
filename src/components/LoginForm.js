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
    <div className="flex justify-center items-center h-screen overflow-hidden">
      <div className="flex flex-col justify-center items-center shadow-xl p-8">
        <div className="text-xl font-bold">Login Form</div>
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-2">
          <label htmlFor="email" className="text-base">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            disabled={formik.isSubmitting}
            className="block w-80 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus-visible:border-none focus:ring-2 focus:ring-inset focus:ring-[#ff0d0d] sm:text-sm sm:leading-6"
          />
          {formik.errors.email ? (
            <div className="text-base text-red-500">{formik.errors.email}</div>
          ) : null}
          <label htmlFor="password" className="text-base">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            disabled={formik.isSubmitting}
            className="block w-80 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus-visible:border-none focus:ring-2 focus:ring-inset focus:ring-[#ff0d0d] sm:text-sm sm:leading-6"
          />
          {formik.errors.password ? (
            <div className="text-base text-red-500">
              {formik.errors.password}
            </div>
          ) : null}

          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="border-2 rounded-lg px-2 py-1 swiggy-button-hover text-base font-bold"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
