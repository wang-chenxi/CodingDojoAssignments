import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import Subnav from "../components/Subnav";

const Create = () => {
  const history = useHistory();
  const [formState, setFormState] = useState({
    gameOne: 0,
    gameTwo: 0,
    gameThree: 0,
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
      .post("http://localhost:8000/api/teams", formState)
      .then((res) => {
        history.push("/players/list");
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
      <Subnav />
      <form
        className="border border-dark m-1 text-start d-flex flex-column gap-3 p-3"
        onSubmit={submitHandler}
      >
        {" "}
        <h1>Add Player</h1>
        <label className=" form-label">Player Name:</label>
        <input
          className="form-control "
          type="text"
          name="name"
          onChange={changeHandler}
          value={formState.name}
        />
        {validState.name ? (
          <p style={{ color: "red" }}>{validState.name}</p>
        ) : null}
        <label className=" form-label">Preffered Position:</label>
        <input
          className="form-control "
          type="text"
          name="position"
          onChange={changeHandler}
          value={formState.position}
        />
        <input type="submit" className="btn btn-success w-25" value="ADD" />
      </form>
    </div>
  );
};

export default Create;
