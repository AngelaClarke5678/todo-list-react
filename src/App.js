import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import "./App.css";

function App() {
const [todos, setTodos] = useState([ //an array of objects
  { //object, dead give away is key value objects eg text, isCompleted and value: False
  text: "learn about react",
  isCompleted: false,
  },
  {
  text: "Meet friend for lunch",
  isCompleted: false,
  },
  {
  text: "Build really cool todo app",
  isCompleted: false,
  },
]);

const addTodo = (text) => {
  const newTodos = [...todos, { text }];
  setTodos(newTodos);
};

const completeTodo = (index) => {
  const newTodos = [...todos];
  newTodos[index].isCompleted = true;
  setTodos(newTodos);
};

const removeTodo = (index) => {
  const newTodos = [...todos];
  newTodos.splice(index,1);
  setTodos(newTodos);
};


// setting a variable of returnTodo as an outcome of an anonymous function
// index refers to the todo
const returnTodo = (index) => {
  const newTodos = [...todos]; //spread operator allows us to 'copy and paste and add 1'
  newTodos[index].isCompleted = false; //editing an atribute of one particular item and making it false
  setTodos(newTodos); //updating state
};

  return (
    <div className="app">
      <div className="todo-list">
  <h1>My todo list</h1>
  {todos.map((todo, index) => ( 
    <TodoItem todo={todo} key={index} index={index} completeTodo={completeTodo} 
    removeTodo ={removeTodo}
    returnTodo ={returnTodo} /> //attributes on the element
  ))}
  <TodoForm addTodo={addTodo}/>
  </div>
  </div>
  );
}

export default App;