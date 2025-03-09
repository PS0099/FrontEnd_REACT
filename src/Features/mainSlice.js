import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasks")) || [],
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        id: nanoid(),
        text: action.payload,
        completed: false,
        isFavorite: false,
      });
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) task.completed = !task.completed; //  Correctly toggling
      localStorage.setItem("tasks", JSON.stringify(state.tasks)); //  Save updated array
    },
    toggleFavorite: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) task.isFavorite = !task.isFavorite; //  Correctly toggling
      localStorage.setItem("tasks", JSON.stringify(state.tasks)); //  Save updated array
    },
  },
});

export const { addTask, deleteTask, toggleTask, toggleFavorite } =
  mainSlice.actions;

export default mainSlice.reducer;
