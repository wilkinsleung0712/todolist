import React, {useContext} from "react";
import {Context as TodoContext} from '../context/TodoContext'
import {List, ListItem, ListItemText, Grid} from "@material-ui/core";
import styled from "styled-components";


const Todos:React.FC = () => {
    const {todos} = useContext(TodoContext)
    return (
        <Grid container justify = "center">
        <List dense={true}>
            {todos.map(todo =>
                <ListItem key={`todo-${todo}`}>
                    <ListItemText
                        primary={todo}
                    />
                </ListItem>,
            )}
        </List>
        </Grid>)

}


const TodoList = styled(Todos)`
`

export default TodoList