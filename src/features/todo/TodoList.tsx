import TodoItem from '../../features/todo/TodoItem';
import {Todo} from "../../types"

type Props = {
    todos: Todo[];
    filter: string;
    handleCheck: (id: number, e: React.ChangeEvent<HTMLInputElement>) => void;
    handleEdit: (id: number, e: React.ChangeEvent<HTMLInputElement>) => void;
    handleDelete: (id: number) => void;
}

export default function TodoList({todos ,filter, handleCheck, handleEdit, handleDelete}: Props) {
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
            <TodoItem key={todo.id} todo = {todo} handleCheck = {handleCheck} handleDelete={handleDelete} handleEdit={handleEdit}></TodoItem>
            ))}
        </div>
        </>
    )
}