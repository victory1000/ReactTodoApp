import React from "react";
import '../styles/todo-list-item.css'

const TodoListItem = ( { label, important = false } ) => {
  const style = {
    color: important ? 'tomato' : 'black'
  }

  return <span className="todo-list-item" style={style}>{ label }</span>;
}

export default TodoListItem;