import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  filter: "All",
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const taskIndex = state.tasks.findIndex(
        (t) => t.id === action.payload.id
      );
      if (taskIndex > -1) {
        state.tasks[taskIndex] = action.payload;
      } else {
        state.tasks.push(action.payload);
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    toggleComplete: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.status = task.status === "Completed" ? "Pending" : "Completed";
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addTask, deleteTask, toggleComplete, setFilter } =
  tasksSlice.actions;
export const selectTasks = (state) => state.tasks.tasks;
export const selectFilter = (state) => state.tasks.filter;
export default tasksSlice.reducer;
