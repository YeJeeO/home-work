import React from "react";
import Todo from "./Todo";

function TodoList({ todos, removeTodo, toggleComplete }) {
  return (
    <form>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          text={todo.text}
          removeTodo={removeTodo}
          toggleComplete={toggleComplete}
        />
      ))}
    </form>
  );
}

export default TodoList;
