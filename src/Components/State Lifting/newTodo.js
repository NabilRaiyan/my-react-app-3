import React from 'react'

export default function NewTodo(props) {
    props.onHandleNewTodo({
        title: "Do homework"
    });
  return (
    <div>
      <h4>New Todo</h4>
      
    </div>
  )
}
