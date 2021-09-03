import React, { useState, useEffect } from "react";

//another solution for realtime validation
function useTextField(validator) {
  const [value, setValue] = useState("");
  const [valid, setValid] = useState(true);
  function onValueChange(e) {
    setValue(e.target.value);
  }
  useEffect(() => {
    setValid(validator(value));
  }, [value]);

  return { value, onValueChange, valid };
}

const ValidateForm2 = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // use different name since we need to host it in a single change handler together with form's content update
  const [validation, setValidation] = useState({
    validateFirstName: true,
    validateLastName: true,
    validateEmail: true,
    validatePassword: true,
    validateConfirmPassword: true,
  });

  //onChange cannot handle two functions since the second function will overwrite the first one, thus, we write both functions within a single event handler
  const changeHandler = (e) => {
    const { name, value } = e.target;
    //cannot set default value or it will be updated everytime calling changeHandler and the validation will not work correctly
    // let validateFirstName;
    // let validateLastName;
    // let validateEmail;
    // let validatePassword;
    // let validateConfirmPassword;
    setForm({
      ...form,
      [name]: value,
    });
    // async function has delay on setState, thus, we use e.target to do the validation in realtime
    if (e.target.name == "firstName") {
      if (e.target.value.length < 2) {
        setValidation({ ...validation, validateFirstName: false });
      } else {
        setValidation({ ...validation, validateFirstName: true });
      }
    }

    if (e.target.name == "lastName") {
      if (e.target.value.length < 2) {
        setValidation({ ...validation, validateLastName: false });
      } else {
        setValidation({ ...validation, validateLastName: true });
      }
    }
    if (e.target.name == "email") {
      if (e.target.value.length < 5) {
        setValidation({ ...validation, validateEmail: false });
      } else {
        setValidation({ ...validation, validateEmail: true });
      }
    }

    if (e.target.name == "password") {
      if (e.target.value.length < 8) {
        setValidation({ ...validation, validatePassword: false });
      } else {
        setValidation({ ...validation, validatePassword: true });
      }
    }

    if (e.target.name == "confirmPassword") {
      if (e.target.value != form.password) {
        setValidation({ ...validation, validateConfirmPassword: false });
      } else {
        setValidation({ ...validation, validateConfirmPassword: true });
      }
    }
  };

  //   const [firstName, setFirstName] = useState("");
  //   function onFirstNameChange(e) {
  //     setFirstName(e.target.value);
  //   }
  //   useEffect(() => {
  //     // validate first name
  //   }, [firstName]);

  const {
    value: firstName,
    onValueChange: onFirstNameChange,
    valid: firstNameValid,
  } = useTextField((name) => name.length === 0 || name.length >= 2);
  const {
    value: lastName,
    onValueChange: onLastNameChange,
    valid: lastNameValid,
  } = useTextField((name) => name.length === 0 || name.length >= 4);

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
            value={firstName}
            onChange={onFirstNameChange}
          />
          {!firstNameValid && (
            <p className="text-light">2 characters at least</p>
          )}
        </div>
        <div className="mb-3">
          <label for="lastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            name="lastName"
            value={lastName}
            onChange={onLastNameChange}
          />
          {lastNameValid ? null : (
            <p className="text-light">2 characters at least</p>
          )}
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
          {validation.validateEmail ? null : (
            <p className="text-light">5 characters at least</p>
          )}
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
          {validation.validatePassword ? null : (
            <p className="text-light">8 characters at least</p>
          )}
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
          {validation.validateConfirmPassword ? null : (
            <p className="text-light">must match with password</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default ValidateForm2;
