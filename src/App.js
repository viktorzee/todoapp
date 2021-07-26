import TodoApp from './todoapp';
import './App.css';

function App() {
  return (
    <div>
      <TodoApp />
    </div>
  );
}

export default App;

{/*
  TodoApp - for the display
  should import the following
    -todoform- for the form to add
    -todoedit- to edit and save the todoform
    -todolist- shows the list, mapping out the ticked todo
    -todo- for the individual todos

    each todo: id, task: what the todo is, completed: true or false
*/}