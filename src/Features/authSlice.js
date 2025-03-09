import { createSlice, nanoid } from "@reduxjs/toolkit";

// Load users and authentication state from localStorage
const storedUsers = JSON.parse(localStorage.getItem("Users")) || [];
const storedCurrentUser = JSON.parse(localStorage.getItem("CurrentUser")) || null;

const initialState = {
  users: storedUsers, // Persist users across reloads
  isAuthenticated: !!storedCurrentUser, // Check if user is logged in
  currentUser: storedCurrentUser, // Persist logged-in user
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const newUser = {
        id: nanoid(),
        email: action.payload.email,
        password: action.payload.password,
      };
      
      state.users.push(newUser);
      state.isAuthenticated = true;
      state.currentUser = newUser;

      // Store updated data in localStorage
      localStorage.setItem("Users", JSON.stringify(state.users));
      localStorage.setItem("CurrentUser", JSON.stringify(newUser));
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.currentUser = null;
      localStorage.removeItem("CurrentUser"); // Remove logged-in user only
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
