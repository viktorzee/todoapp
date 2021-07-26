import React, { useEffect } from 'react'
import TodoList from './todolist'
import TodoForm from './todoform'
import useTodoState from './hooks/useTodoState'
import Paper from '@material-ui/core/Paper'
import Toolbar from '@material-ui/core/Toolbar'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Switch from '@material-ui/core/Switch'
import Grid from '@material-ui/core/Grid'



function TodoApp() {
    const initialTodos = JSON.parse(window.localStorage.getItem('todos') || "")
    // const initialTodos = [
    //     { id: uuid(), task: "Prayer", completed: true },
    //     { id: uuid(), task: "Eat", completed: false },
    //     { id: uuid(), task: "build TodoApp", completed: false }
    // ]
    const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(initialTodos)

    useEffect(() => {
        window.localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])


    return (
        <Paper style={{
            margin: "0",
            padding: "0",
            height: "100vh",
            backgroundColor: '#fff'
        }}
            elevation={0}
        >
            <AppBar color='primary' position='static'>
                <Toolbar>
                    <Typography>Todo App</Typography>
                    <Switch />
                </Toolbar>
            </AppBar>
            <Grid container justify="center" style={{ marginTop: "1rem" }}>
                <Grid item xs={11} md={8} lg={4}>
                    <TodoForm
                        addTodo={addTodo}
                    />
                    <TodoList
                        todos={todos}
                        removeTodo={removeTodo}
                        toggleTodo={toggleTodo}
                        editTodo={editTodo}
                    />
                </Grid>
            </Grid>


        </Paper>
    )
}

export default TodoApp