import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Form = ({ onCreateNewProduct }) => {
  const history = useHistory();
  const [formState, setFormState] = useState({
    title: "",
    price: 0,
    description: "",
  });

  const [validState, setValidState] = useState({});
  //const [state, setState] = useState();
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    onCreateNewProduct(formState)
      .then(() => {
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
          <input
            type="text"
            name="title"
            id=""
            onChange={changeHandler}
            value={formState.title}
          />
          {validState.title ? (
            <p style={{ color: "red" }}>{validState.title}</p>
          ) : null}
        </p>
        <p className="form-control">
          Price:
          <input
            type="number"
            name="price"
            id=""
            onChange={changeHandler}
            value={formState.price}
          />
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
            value={formState.description}
          />
          {validState.description ? (
            <p style={{ color: "red" }}>{validState.description}</p>
          ) : null}
        </p>
        <button type="submit" className="btn btn-primary form-control">
          Create a New Product
        </button>
      </form>
    </div>
  );
};

export default Form;
