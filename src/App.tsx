import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './features/todo/TodoInput';
import TodoList from './features/todo/TodoList';
import useTodo from './hooks/todo/useTodo';
import useFilter from './hooks/todo/useFilter';

function App() {
  const {todos, handleSubmit, handleEdit, handleCheck, handleDelete }  = useTodo()
  const {filter, handleFilter} = useFilter()

  return (
    <div className="App">
      <div className='header'>
      </div>
      <div className='container w-50 mb-3'>
        <TodoInput handleFilter={handleFilter} handleSubmit={handleSubmit}></TodoInput>
        <TodoList todos = {todos} filter={filter} handleCheck = {handleCheck} handleDelete={handleDelete} handleEdit={handleEdit}></TodoList>
      </div>
    </div>
  );
}

export default App;
