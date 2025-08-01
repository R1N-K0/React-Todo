import {useState, useEffect} from "react"
import { Todo } from "../../types"

export default function useTodo() {
    const [todos, setTodo] = useState<Todo[]>(() => {
        const storageTodo = localStorage.getItem("todos");
        return storageTodo ? JSON.parse(storageTodo) : []
      });
    
    const handleSubmit = (text: string) => {
        if(text.trim() === ""){
        return
    }
    const newTodo = {value: text, id: new Date().getTime(), isFinished: false}
    setTodo((todos) => [newTodo, ...todos])
    }

    const handleEdit = (id: number, e: React.ChangeEvent<HTMLInputElement>) => {
        setTodo((todos) => {
        const newTodos = todos.map((todo) => {
            if(todo.id === id){
            return {...todo, value: e.target.value}
            }
            else{
            return todo
            }
        })
        return newTodos
        })
    }


    const handleCheck = (key: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const newTodos = todos.map((todo, i) => {
        if(todo.id === key){
            return {...todo, isFinished:!todo.isFinished}
        } else {
            return todo;
        }
        })

        setTodo(newTodos)
    }

    const handleDelete = (key: number) => {
        setTodo((todos) => todos.filter((todo) => !(todo.id === key && todo.isFinished)))
    }

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))

    }, [todos])

    return {todos, setTodo, handleSubmit, handleEdit, handleCheck, handleDelete}
}