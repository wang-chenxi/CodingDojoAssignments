import React, { useState } from "react";

export const HookForm = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPasswrod: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <div className="bg-warning text-light">
      <h1>Hook Form</h1>
      <form>
        <div className="mb-3">
          <label for="firstName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            name="firstName"
            onChange={changeHandler}
          />
        </div>
        <div className="mb-3">
          <label for="lastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            name="lastName"
            onChange={changeHandler}
          />
        </div>
        <div className="mb-3">
          <label for="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            onChange={changeHandler}
          />
        </div>
        <div className="mb-3">
          <label for="paswsword" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            onChange={changeHandler}
          />
        </div>
        <div className="mb-3">
          <label for="confirmPaswsword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            name="confirmPassword"
            onChange={changeHandler}
          />
        </div>
      </form>
      <h3>Your Form Data</h3>
      <p>First Name: {form.firstName}</p>
      <p>Last Name: {form.lastName}</p>
      <p>Email: {form.email}</p>
      <p>Password: {form.password}</p>
      <p>Confirm Password: {form.confirmPassword}</p>
    </div>
  );
};

export default HookForm;
