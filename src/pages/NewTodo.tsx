import React, {useContext, useState} from "react";
import styled from "styled-components";
import {Context as TodoContext} from '../context/TodoContext'
import {Button, TextField} from "@material-ui/core";
import useAPIError from "../hooks/useAPIError";
// import {useErrorHandler} from "react-error-boundary";

const NewTodoTask:React.FC = () => {
    const {addTodo} = useContext(TodoContext)
    const [todo, setTodo] = useState("")
    // const handleError = useErrorHandler()
    const {addError} = useAPIError()

    const handleOnClick = () => {
        if(todo === '') {
            // handleError({message: "Todo is empty"})
            addError({message: "Todo is empty", status: "error"})
            return
        }
        addTodo(todo);
        setTodo("")
    }

    return (
        <>
            <TextField value={todo} onChange={(event)=>setTodo(event.target.value)}/>
            <Button color="primary"  onClick={handleOnClick}>Add Todo</Button>
        </>
    )
}

const NewTodo = styled(NewTodoTask)`
`

export default NewTodo