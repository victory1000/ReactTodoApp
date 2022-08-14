import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoList from "./components/todo_list";
import AppHeader from "./components/app_header";
import SearchPanel from "./components/search_panel";

const App = () => {
  const todoData = [
    {label: 'Drink Coffee', important: false, id: 1},
    {label: 'Eat', important: true, id: 2},
    {label: 'Driver License', important: false, id: 3},
  ]

  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList todos={ todoData }/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);