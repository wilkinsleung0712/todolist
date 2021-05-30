import React, {useState} from "react";
import mockTodos from '../data.json'

interface TodoContext {
    todos: string[],
    addTodo: (todo:string) => void;
}

export const Context = React.createContext({} as TodoContext)
export const Provider:React.FC = ({children}) => {
    // default data to display
    const [todos, setTodos] = useState(mockTodos)
    const addTodo = (todo:string) => setTodos([...todos, todo])

    return (
        <Context.Provider value={{todos, addTodo}}>{children}</Context.Provider>
    )
}