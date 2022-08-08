import React from "react";
import "./TodoItem.css"

function TodoItem(props) {
    // destructruring through the props, giving us access to use these functions on the props https://medium.com/@lcriswell/destructuring-props-in-react-b1c295005ce0
    const { todo, index, completeTodo, removeTodo, returnTodo } = props;
    return <div className={`${todo.isCompleted ? "complete": ""}`}>
        {todo.text}
        <div>
            <button onClick={()=> completeTodo(index)}>Complete</button>
            <button onClick={()=> removeTodo(index)}>x</button>
            <button onClick={()=> returnTodo(index)}>Oops</button> 
            {/* passing index into returnTodo */}
        </div>
    </div>;
}

export default TodoItem;
