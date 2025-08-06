import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './features/todo/TodoInput';
import TodoList from './features/todo/TodoList';
import useFilter from './hooks/todo/useFilter';
import { TodoProvider } from './features/todo/providers/TodoContext';

function App() {
  const {filter, handleFilter} = useFilter()

  return (
    <TodoProvider>
      <div className="App">
        <div className='header'>
        </div>
        <div className='container w-50 mb-3'>
          <TodoInput handleFilter={handleFilter}></TodoInput>
          <TodoList filter={filter} ></TodoList>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
