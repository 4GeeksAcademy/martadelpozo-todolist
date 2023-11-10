
import React, { useState } from 'react';
import '/src/styles/index.css'; 

function TaskItem({ task, onDelete }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="task"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="task-text">{task}</span>
      {isHovered && (
        <span className="delete-icon" onClick={onDelete}>
          &#10006;
        </span>
      )}
    </div>
  );
}

function ToDo() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <>
    <div className="container">
      <h1 className="task-title">todos</h1>
      <div className="tasks mx-auto">
      <input 
        type="text"
        placeholder="What needs to be done?"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') addTask();
        }}
      />
    
      <div className="task-list">
      {tasks.map((task, index) => (
          <TaskItem key={index} task={task} onDelete={() => deleteTask(index)} />
        ))}
      </div>
      
      <div className="task-number">
        {tasks.length === 0 ? (
          <span>No tasks, add a task</span>
        ) : (
          <span>{tasks.length} items left </span>
        )}
      </div>
      </div>
    </div>
    </>
  );
}

export default ToDo;


