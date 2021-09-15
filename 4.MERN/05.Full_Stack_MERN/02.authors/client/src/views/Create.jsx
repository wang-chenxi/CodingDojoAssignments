import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const Create = () => {
  const history = useHistory();
  const [formState, setFormState] = useState({
    name: "",
  });
  const [validState, setValidState] = useState({});
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/authors", formState)
      .then((res) => {
        history.push("/");
      })
      .catch((err) => {
        // console.log("CATCH: ", err.response.data)
        const { errors } = err.response.data;
        let errorObj = {};
        for (let [key, value] of Object.entries(errors)) {
          errorObj[key] = value.message;
        }
        console.log(errorObj);
        setValidState(errorObj);
      });
  };

  return (
    <div className="d-flex flex-column gap-3 align-items-start">
      <Link to={"/"} className="btn btn-primary">
        Home
      </Link>
      <h4>Add a new author:</h4>
      <form className="w-50" onSubmit={submitHandler}>
        <label className="form-control">Name:</label>
        <input
          type="text"
          className="form-control mb-3"
          name="name"
          id=""
          onChange={changeHandler}
          value={formState.name}
        />
        {validState.name ? (
          <p style={{ color: "red" }}>{validState.name}</p>
        ) : null}
        <div className="d-flex justify-content-between gap-3">
          <Link to={"/"} className="btn btn-primary flex-fill">
            Cancel
          </Link>
          <button className="btn btn-primary flex-fill" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
