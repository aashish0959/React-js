import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: []
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    updateTaskStatus: (state, action) => {
      const task = state.tasks.find(task => task.id === action.payload.id);
      if (task) {
        task.completed = !task.completed;
      }
    },
    editTask: (state, action) => {
      const { id, text, name, description, priority, type } = action.payload;
      const task = state.tasks.find(task => task.id === id);
      if (task) {
        task.text = text;
        task.name = name; // Update task name
        task.description = description; // Update task description
        task.priority = priority;
        task.type = type;
      }
    }
  }
});

export const { addTask, removeTask, updateTaskStatus, editTask } = tasksSlice.actions;
export default tasksSlice.reducer;
