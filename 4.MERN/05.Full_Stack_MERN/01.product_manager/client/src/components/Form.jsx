import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [formState, setFormState] = useState({
    title: "",
    price: -1,
    description: "",
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
      .post("http://localhost:8000/api/products", formState)
      .then((res) => {
        setFormState({
          title: "",
          price: 0,
          description: "",
        });
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
    <div>
      <form onSubmit={submitHandler} className="form">
        <p className="form-control">
          Title:
          <input type="text" name="title" id="" onChange={changeHandler} />
          {validState.title ? (
            <p style={{ color: "red" }}>{validState.title}</p>
          ) : null}
        </p>
        <p className="form-control">
          Price:
          <input type="number" name="price" id="" onChange={changeHandler} />
          {validState.price ? (
            <p style={{ color: "red" }}>{validState.price}</p>
          ) : null}
        </p>
        <p className="form-control">
          Description:
          <input
            type="text"
            name="description"
            id=""
            onChange={changeHandler}
          />
          {validState.description ? (
            <p style={{ color: "red" }}>{validState.description}</p>
          ) : null}
        </p>
        <button type="submit" className="btn btn-primary form-control">
          Create
        </button>
      </form>
    </div>
  );
};

export default Form;
