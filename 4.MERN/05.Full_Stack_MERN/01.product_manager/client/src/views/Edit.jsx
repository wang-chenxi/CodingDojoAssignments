import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

const Edit = () => {
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/${id}`)
      .then((res) => setFormState(res.data))
      .catch((err) => console.log(err));
  }, []);

  const [formState, setFormState] = useState({});

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
      .put(`http://localhost:8000/api/${id}`, formState)
      .then((res) => {
        history.push(`/${id}`);
      })
      .catch((err) => {
        // console.log("CATCH: ", err.response.data)
        const { errors } = err.response.data;
        let errorObj = {};
        for (let [key, value] of Object.entries(errors)) {
          errorObj[key] = value.message;
        }
        setValidState(errorObj);
      });
  };

  return (
    <>
      <h1>Edit the Product</h1>
      <form onSubmit={submitHandler}>
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
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </>
  );
};

export default Edit;
