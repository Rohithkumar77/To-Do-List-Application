import './App.css';
import {useState} from 'react';
function App() {

  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

   function handleChange(event) {
    setNewTask(event.target.value);
  }

   function addTask() {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    };
    setTodoList([...todoList, task]);
  }
   function deleteTask(id) {
    setTodoList(todoList.filter((task) => task.id !== id));
  }

  return (
    <div className="App">
      <h1>To Do List Application</h1>
      <div className='addTask'>
          <input onChange={handleChange} />
          <button onClick={addTask}>Add Task</button>
      </div>
      <div className='List'>
        {todoList.map((task) => {
          return <div> <h1>{task.taskName}</h1>
          <button onClick={() => deleteTask(task.id)}>X</button> </div>
        })}
      </div>
    </div>
  );
}

export default App;
