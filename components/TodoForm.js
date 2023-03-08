import React, { useState } from 'react';
 
export default function TodoForm ({ addTodo }) {
  const [text, setText] = useState('');
 
   function inputTask(e) {
    e.preventDefault();
    if (!text) return;
    addTodo(text);
    setText('');
  };
 
  return <>
    <form>
      <input
          type="text"
          value={text}
          onInput={(evt) => setText(evt.target.value)}
        />
        <button
          onClick={inputTask}
        >
          ADD
        </button>
    </form>
</>
 
}