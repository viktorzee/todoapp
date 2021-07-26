import React from 'react'
import useInputState from './hooks/useinputstate'
import TextField from '@material-ui/core/TextField'

function EditTodoForm({ editTodo, id, task, toggleEditForm }) {
    const [value, handleChange, reset] = useInputState(task)
    return (
        // <Paper>
        <form onSubmit={(e) => {
            e.preventDefault()
            editTodo(id, value)
            reset()
            toggleEditForm()
        }}
            style={{ marginLeft: "1rem", width: "50%" }}
        >
            <TextField
                margin='normal'
                value={value}
                onChange={handleChange}
                autoFocus
            />
        </form>
        // </Paper >


    )
}

export default EditTodoForm