import React, { useReducer, useState } from "react";

import "./styles.css";

export default function UseReducer() {
  const intialTodos = new Map();
  const [currentId, setCurrentId] = useState(1);
  const [taskName, setTaskName] = useState("");

  const reducer = (state, action) => {
    console.log("state", state);
    console.log("action", action);
    return state;
  };

  const [todos, dispatch] = useReducer(reducer, intialTodos);

  return (
    <>
      <h1>Todo List</h1>
      <input value={taskName} onChange={(e) => setTaskName(e.target.value)} />
      {[...todos.values()].map((todo, idx) => (
        <div>
          <label>
            {" "}
            {todo.task}
            <input
              type="checkbox"
              onChange={() => dispatch({ action: "COMPLETE", id: todo.id })}
            />
          </label>
        </div>
      ))}
      <button onClick={() => dispatch({ action: "COMPLETE", id: 1 })}>
        Add new todo
      </button>
    </>
  );
}
