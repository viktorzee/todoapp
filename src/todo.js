import React from 'react'
import useToggleState from './hooks/usetogglestate'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import EditTodoForm from './todoeditform'

function Todo({ task, completed, removeTodo, id, toggleTodo, editTodo }) {
    const [isEditing, toggleIsEditing] = useToggleState(false)
    return (
        //add function for the individual todo here


        <ListItem style={{
            height: "64px"
        }}>

            {isEditing ?
                <EditTodoForm
                    editTodo={editTodo}
                    task={task}
                    id={id}
                    toggleEditForm={toggleIsEditing}
                />
                :
                <>
                    <Checkbox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)} />
                    <ListItemText style={{
                        textDecoration: completed ? 'line-through' : 'none'
                    }}>{task} </ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
                            <DeleteIcon />
                        </IconButton>
                        <IconButton aria-label='Edit' onClick={toggleIsEditing}>
                            <EditIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </>
            }

        </ListItem>

    )
}

export default Todo