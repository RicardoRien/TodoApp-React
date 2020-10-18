import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import { HiOutlineClipboardCheck } from 'react-icons/hi'

export default function Todo({ todos, completeTodo, removeTodo, updatedTodos }) {
  // States
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  // Functions() =>
  const submitUpdate = (value) => {
    updatedTodos(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if( edit.id ) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />
  };

  return todos.map((todo, index) => (
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index} >
      
      <div key={todo.id}>
        {todo.text}
      </div>

      <div className="icons">
        <HiOutlineClipboardCheck onClick={() => completeTodo(todo.id)}/>

        <TiEdit className="edit-icon"
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
        />

        <RiCloseCircleLine className="delete-icon"
          onClick={() => removeTodo(todo.id)}
        />
      </div>

    </div>
  ));
};