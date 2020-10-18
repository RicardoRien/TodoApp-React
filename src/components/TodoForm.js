import React, { useState, useRef, useEffect } from 'react'

export default function TodoForm({ onSubmit, edit }) {
  // States & Hooks
  const [input, setInput] = useState(edit ? edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  // Functions() =>
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default reload

    onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };
  
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      { edit ? ( 
      <>
        <input
          type="text"
          placeholder="Modify task"
          value={input} 
          name="text" 
          className="todo-input"
          onChange={handleChange}
          ref={inputRef}
        />
        <button className="todo-button">Modify</button> 
      </> 
      ) 
      :
      (
      <>
        <input 
          type="text"
          placeholder="Add a task" 
          value={input} 
          name="text" 
          className="todo-input"
          onChange={handleChange}
          ref={inputRef}
        />
        <button className="todo-button">Add task</button>
      </>
      ) }

    </form>
  );
};
