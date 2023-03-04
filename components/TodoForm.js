import React, { useState } from 'react';
 
const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;
    addTodo(text);
    setText('');
  };
 
  return (
    <form onSubmit={handleSubmit}>
      <input
          type="text"
          value={text}
          onInput={(evt) => setText(evt.target.value)}
        />
        <button
          onClick={() => {
            setToDos([...ToDos, { str: text, id: Date.now() }]);
            setText("");
          }}
        >
          ADD
        </button>
    </form>
  );
};
 
export default TodoForm;