import React from "react";
import TodoListItem from './todo_list_item';
import '../styles/todo-list.css';

const TodoList = ({ todos }) => {
  const items = todos.map((el) => {
    const {id, ...elProps} = el;
    return <li key={el.id} className="list-group-item"><TodoListItem { ...elProps } /></li>
  });

  return <ul className="list-group todo-list">{items}</ul>;
}

export default TodoList;