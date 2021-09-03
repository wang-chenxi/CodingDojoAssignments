import React, { useState } from "react";
import TodoAdd from "./TodoAdd";

const TodoDisplay = () => {
  const [todo, setTodo] = useState([]);

  const addTodo = (task) => {
    const taskId = todo.length;
    setTodo([
      ...todo,
      { task: task, completed: false, removed: false, id: taskId },
    ]);
  };

  const remove = (e) => {
    let id = e.target.value;
    const copy = JSON.parse(JSON.stringify(todo));
    copy[id].removed = true;
    setTodo(copy);
  };

  const complete = (e) => {
    let id = e.target.value;
    const copy = JSON.parse(JSON.stringify(todo));
    copy[id].completed = true;
    setTodo(copy);
  };

  const completedStyle = {
    textDecoration: "line-through",
  };
  return (
    <div className="bg-dark text-light">
      <h1>To do list</h1>
      <TodoAdd addTodo={addTodo} />
      <h3>My Todo:</h3>

      {todo
        .filter((task) => task.removed == false)
        .map((task) => (
          <div className="d-flex gap-2 justify-content-center align-items-center pb-3">
            <h3 key={task.id} style={task.completed ? completedStyle : {}}>
              {task.task}
            </h3>
            <input type="checkbox" value={task.id} onClick={complete} />
            <button
              className="btn btn-warning"
              value={task.id}
              onClick={remove}
            >
              Delete
            </button>
          </div>
        ))}
    </div>
  );
};

export default TodoDisplay;
