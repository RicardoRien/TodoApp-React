import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

export default function TodoList() {
  // States
  const [todos, setTodos] = useState([]);

  // Functions() =>
  const addTodo = (todo) => {
    if(!todo.text || /^\s*$/.test(todo.text)) { // Don't allow to add space solo.
      return;
    };
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const updatedTodos = (todoId, newValue) => {
    if(!newValue.text || /^\s*$/.test(newValue.text)) { // Don't allow to add space solo.
      return;
    };
    setTodos((prev) => prev.map((item) => (item.id === todoId ? newValue : item)));
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      };
      return todo;
    });
    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removeArr);
  }

  return (
    <div className="todo-app">
      <h1>Here your tasks:</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updatedTodos={updatedTodos} />
    </div>
  );
};
