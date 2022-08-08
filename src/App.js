import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import "./App.css";

function App() {
const [todos, setTodos] = useState([
  "learn about react",
  "Meet friend for lunch",
  "Build really cool todo app",
]);

const addTodo = (text) => {
  const newTodos = [...todos, text];
  setTodos(newTodos);
};

  return (
    <div className="app">
      <div className="todo-list">
  <h1>My todo list</h1>
  {todos.map((todo, index) => ( 
    <TodoItem todo={todo} key={index} />
  ))}
  <TodoForm addTodo={addTodo}/>
  </div>
  </div>
  );
}

export default App;