import { createRoot } from "react-dom/client";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./Store/store.js"; // Ensure the correct path to your store file
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Compo/Login.jsx";
import FullH from "./Compo/FullH.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/dashboard", element: <FullH /> }, // Default route
      // Add more routes as needed.
    ], // Add more routes as needed.
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>
);
