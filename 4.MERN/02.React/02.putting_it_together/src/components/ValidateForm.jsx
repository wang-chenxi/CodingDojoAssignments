import React, { useState } from "react";

const ValidateForm = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // use different name since we need to host it in a single change handler together with form's content update
  const [validation, setValidation] = useState({
    validateFirstName: false,
    validateLastName: false,
    validateEmail: false,
    validtePassword: false,
    validateConfirmPassword: false,
  });

  //onChange cannot handle two functions since the second function will overwrite the first one, thus, we write both functions within a single event handler
  const changeHandler = (e) => {
    const { name, value } = e.target;
    let validateFirstName = false;
    let validateLastName = false;
    let validateEmail = false;
    let validatePassword = false;
    let validateConfirmPassword = false;
    setForm({
      ...form,
      [name]: value,
    });
    // async function has delay on setState, thus, we use e.target to do the validation in realtime
    if (e.target.name == "firstName" && e.target.value.length < 2) {
      validateFirstName = true;
    } else {
      validateFirstName = false;
    }
    if (e.target.name == "lastName" && e.target.value.length < 2) {
      validateLastName = true;
    } else {
      validateLastName = false;
    }
    if (e.target.name == "email" && e.target.value.length < 5) {
      validateEmail = true;
    } else {
      validateEmail = false;
    }
    if (e.target.name == "password" && e.target.value.length < 8) {
      validatePassword = true;
    } else {
      validatePassword = false;
    }
    if (e.target.name == "confirmPassword" && e.target.value != form.password) {
      validateConfirmPassword = true;
    } else {
      validateConfirmPassword = false;
    }
    setValidation({
      validateFirstName,
      validateLastName,
      validateEmail,
      validatePassword,
      validateConfirmPassword,
    });
  };

  return (
    <div className="bg-danger text-light">
      <h1>More Forms</h1>
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
          {validation.validateFirstName ? (
            <p className="text-light">2 characters at least</p>
          ) : null}
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
          {validation.validateLastName ? (
            <p className="text-light">2 characters at least</p>
          ) : null}
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
          {validation.validateEmail ? (
            <p className="text-light">5 characters at least</p>
          ) : null}
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
          {validation.validatePassword ? (
            <p className="text-light">8 characters at least</p>
          ) : null}
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
          {validation.validateConfirmPassword ? (
            <p className="text-light">must match with password</p>
          ) : null}
        </div>
      </form>
    </div>
  );
};

export default ValidateForm;
