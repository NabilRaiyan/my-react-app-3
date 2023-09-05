import React from "react";

// Todo component (child component)
const Todo = (props) =>{
    return (
    <div>
    <h2>I am todo</h2>
    <h4>Todo: {props.title}</h4>
    </div>
    )
  }

export default Todo;