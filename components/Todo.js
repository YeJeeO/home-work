import React from "react";
import { useState } from 'react';

function Todo({todo, toggleComplete, removeTodo }) {
  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }

  function handleRemoveClick() {
    removeTodo(todo.id);
  }

  return (
    <div className="todo">
      <li>
        {todo}
    <button onClick={handleRemoveClick} className="delete">X</button>
    </li>
  </div>
  );
}

export default Todo;