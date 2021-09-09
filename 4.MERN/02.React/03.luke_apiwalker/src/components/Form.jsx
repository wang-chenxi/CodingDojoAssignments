import React, { useState } from "react";
import { useHistory } from "react-router";

const Form = () => {
  const [state, setstate] = useState({});
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setstate({ ...state, [name]: value });
    console.log(state);
  };
  const history = useHistory();
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(state.category, state.id);
    history.push(`/${state.category}/${state.id}`);
  };

  return (
    <div>
      <form
        className="d-flex justify-content-center gap-3"
        onSubmit={submitHandler}
      >
        <div>
          Search for:
          <select name="category" onChange={changeHandler}>
            <option>select</option>
            <option value="people">People</option>
            <option value="planets">Planets</option>
          </select>
        </div>

        <div>
          <label>ID:</label>
          <input type="number" name="id" onChange={changeHandler}></input>
        </div>
        <input type="submit" value="Search" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default Form;
