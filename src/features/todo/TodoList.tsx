import { useContext } from 'react';
import TodoItem from '../../features/todo/TodoItem';
import {Todo} from "../../types"
import { TodoContext } from './providers/TodoContext';

type Props = {
    filter: string;
  
}

export default function TodoList({filter}: Props) {
  const {todos} = useContext(TodoContext)!
    const filteredTodos = todos.filter((todo) => {
        if(filter === "all"){
          return true
        }
    
        if(filter === "checked"){
          return todo.isFinished
        }
    
        if(filter === "unchecked"){
          return !todo.isFinished
        }
        return true
      })
    return (
        <>
        <div className="container w-75 mt-5">
            <div className='text-end'>未完了タスク：{todos.filter((todo) => !todo.isFinished).length}</div>
            {filteredTodos.map((todo) => (
            <TodoItem key={todo.id} todo = {todo}></TodoItem>
            ))}
        </div>
        </>
    )
}