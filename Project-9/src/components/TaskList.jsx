import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, removeTask, editTask, updateTaskStatus } from '../features/tasks/tasksSlice';
import './TaskList.css';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks.tasks);
  const dispatch = useDispatch();

  // State variables for the task details
  const [taskText, setTaskText] = useState('');
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('medium');
  const [type, setType] = useState('Work');
  const [editingTaskId, setEditingTaskId] = useState(null); // for editing task

  const handleAddOrUpdateTask = () => {
    if (editingTaskId) {
      // If editing, update the task
      dispatch(editTask({ 
        id: editingTaskId, 
        text: taskText, 
        name: taskName, 
        description, 
        priority, 
        type 
      }));
    } else {
      // If adding, create a new task
      dispatch(addTask({ 
        id: Date.now(), 
        text: taskText, 
        name: taskName, 
        description, 
        completed: false, 
        priority, 
        type 
      }));
    }
    
    // Reset input fields after adding or updating
    setTaskText('');
    setTaskName('');
    setDescription('');
    setPriority('medium');
    setType('Work');
    setEditingTaskId(null); // Reset editing task id
  };

  const handleEditTask = (task) => {
    setEditingTaskId(task.id);
    setTaskText(task.text);
    setTaskName(task.name);
    setDescription(task.description);
    setPriority(task.priority);
    setType(task.type);
  };

  return (
    <div className="container">
      <h1>Task Management App</h1>
      <h2>Task List</h2>
      <div className="input-group">
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Enter a task"
        />
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Enter task name"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter description"
        />
      </div>

      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <div>
        <label>
          <input
            type="radio"
            value="Work"
            checked={type === 'Work'}
            onChange={(e) => setType(e.target.value)}
          />
          Work
        </label>
        <label>
          <input
            type="radio"
            value="Personal"
            checked={type === 'Personal'}
            onChange={(e) => setType(e.target.value)}
          />
          Personal
        </label>
      </div>
      <button className="button" onClick={handleAddOrUpdateTask}>
        {editingTaskId ? 'Update Task' : 'Add Task'}
      </button>

      <ul className="task-list">
        {tasks.map(task => (
          <li key={task.id}>
            
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.text} - Name: {task.name} - Description: {task.description} - Priority: {task.priority} - Type: {task.type}
            </span>
            <div>
              <button className="edit-button" onClick={() => handleEditTask(task)}>Edit</button>
              <button className="delete-button" onClick={() => dispatch(removeTask(task.id))}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
