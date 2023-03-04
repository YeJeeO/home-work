import React from 'react';
 
export default function TodoList ({ todos }) {
    function deleteTodo (id) {
        setTodos(todos.filter((todo) => todo.id !== id));
        };
  return (
    <ol>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick= {deleteTodo}>
            Delete</button>
        </li>
      ))}
    </ol>
  );
}