import { useState } from 'react'
import { v4 as uuid } from 'uuid'

export default initialValue => {
    const [todos, setTodos] = useState(initialValue)
    return {
        todos,
        addTodo: (newTodoText) => {
            setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }])
        },
        removeTodo: (todoId) => {
            //filter out the removed todo
            const removedTodo = todos.filter(todo => (
                todo.id !== todoId
            ))
            setTodos(removedTodo)
        },
        toggleTodo: (todoId) => {
            //select the needed todo for editing
            const toggledTodo = todos.map(todo => (
                todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
            ))
            setTodos(toggledTodo)
        },
        editTodo: (todoId, newTask) => {
            const editedTodo = todos.map(todo => (
                todo.id === todoId ? { ...todo, task: newTask } : todo
            ))
            setTodos(editedTodo)
        }

    }
}