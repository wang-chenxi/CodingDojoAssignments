import React, { useState } from "react";

const TodoAdd = (props) => {
  const { addTodo } = props;

  const [task, setTask] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(addTodo);
    addTodo(task);
  };
  return (
    <div>
      <form
        className="form-control d-flex gap-5 justify-content-center "
        onSubmit={submitHandler}
      >
        <input type="text" onChange={(e) => setTask(e.target.value)}></input>
        <input type="submit" className="btn btn-primary" value="Add" />
      </form>
    </div>
  );
};

export default TodoAdd;
