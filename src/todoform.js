import React from 'react'
import UseInputState from './hooks/useinputstate'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'

function TodoForm({ addTodo }) {
    const [value, handleChange, reset] = UseInputState("")
    return (
        <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
            <form onSubmit={e => {
                e.preventDefault()
                addTodo(value)
                reset()
            }}>
                <TextField
                    value={value}
                    onChange={handleChange}
                    margin="normal"
                    label="Add new Todo"
                    fullWidth
                />
            </form>

        </Paper>
    )
}

export default TodoForm