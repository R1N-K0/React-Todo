import { createContext, useState, useEffect, ReactNode, Dispatch, SetStateAction } from "react";
import { Todo } from "../../../types";

type props = {
    children: ReactNode | ReactNode[]
}

type todoContextType = {
    todos: Todo[],
    setTodos: Dispatch<SetStateAction<Todo[]>>;
    handleSubmit: (todo: string) => void,
    handleEdit: (id: number, e: React.ChangeEvent<HTMLInputElement>) => void,
    handleDelete: (id: number) => void,
    handleCheck: (id: number, ) => void,
}

export const TodoContext = createContext<todoContextType | undefined>( undefined);

export const TodoProvider = (props: props) => {
    const [todos, setTodos] = useState<Todo[]>(() => {
    const storageTodo = localStorage.getItem("todos");
            return storageTodo ? JSON.parse(storageTodo) : []
          });

    const handleSubmit = (todo: string) => {
        if(todo.trim() === "") return
        else {
            const newTodo: Todo = {
                value:  todo.trim(),
                id: new Date().getTime(),
                isFinished: false, 
            }
            setTodos((prevTodos) => [newTodo, ...prevTodos])
        }
    }

    const handleEdit = (id: number,  e:React.ChangeEvent<HTMLInputElement>) => {
        setTodos((prevTodos) => {
            const newTodos = prevTodos.map((todo) => {
                if(todo.id === id){
                    return {...todo, value: e.target.value}
                }else {
                    return todo
                }
            })

            return newTodos
        })
    }

    const handleDelete = (id: number) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((todo) => !(todo.id === id && todo.isFinished))
        })
    }

    const handleCheck = (id: number) => {
        setTodos((prevTodos) => {
            const newTodos = prevTodos.map((todo) => {
                if(todo.id === id){
                    return {...todo, isFinished: !todo.isFinished}
                } else {
                    return todo
                }
            })
            return newTodos
        })
    }

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    
    }, [todos])
    
    
    return (
        <TodoContext.Provider value = {{todos, setTodos, handleSubmit, handleEdit, handleDelete, handleCheck}}>
            {props.children}
        </TodoContext.Provider>
    )
}