import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../Features/authSlice";
import { useNavigate } from "react-router-dom";
import FullH from "./FullH";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(login({ email, password }));
      navigate("/dashboard"); // Redirect after login
    } else {
      alert("Please enter email and password!");
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  if (isAuthenticated) {
    return <FullH />;
  } else {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
          <form onSubmit={handleLogin} className="space-y-6">
            <h2 className="text-2xl font-bold text-center">Login</h2>
            <div>
              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
};

export default Login;
