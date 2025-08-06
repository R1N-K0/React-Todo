import { useContext } from "react";
import {Todo} from "../../types"
import { TodoContext } from "./providers/TodoContext";
type Props = {
    todo: Todo;
}

export default function TodoItem({todo}: Props) {
    const {handleCheck, handleEdit, handleDelete} = useContext(TodoContext)!
    return (
        <>
            <div
            className="d-flex justify-content-between align-items-center gap-3 mt-2 p-2 border rounded">
            <div className="d-flex align-items-center">
              <input
                type="checkbox"
                checked={todo.isFinished}
                onChange={(e) => handleCheck(todo.id)}
                className="me-2"
              />
              <input
                style={{
                  textDecoration: todo.isFinished ? "line-through" : "none",
                  color: todo.isFinished ? "gray" : "black",
                }}
                value={todo.value}
                className='input-group-text w-100'
                onChange={(e) => handleEdit(todo.id, e)}
              >
            
              </input>
            </div>

            <div className="btn btn-danger btn-sm" onClick={() => handleDelete(todo.id)}>
              削除
            </div>
          </div>
        </>
    )
}