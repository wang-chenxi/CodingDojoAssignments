import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
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
        history.push(`/`);
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
    <div className="d-flex flex-column gap-3 align-items-start">
      <Link to={"/"} className="btn btn-primary">
        Home
      </Link>
      {formState.name == "CastError" ? (
        <>
          <h3 className="text-start">
            We're sorry, but we could not find the author you are looking for.
            Would you like to add this author to our database?
          </h3>
          <Link to={"/new"} className="btn btn-primary">
            Add an author
          </Link>
        </>
      ) : (
        <>
          <h4>Edit this author:</h4>
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
        </>
      )}
    </div>
  );
};

export default Edit;
