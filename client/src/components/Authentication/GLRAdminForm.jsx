import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const GLRAdminForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginAsUser = () => {
    navigate("/signin");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/admin-login", {
        email,
        password,
      });
      const token = response.data.token;
      // Display success message
      Swal.fire({
        icon: "success",
        title: "Login Successful!",
        text: "You have successfully logged in as admin.",
      });
      // Store the token in local storage or context for future requests
      localStorage.setItem("authToken", token);
      // Redirect to admin panel
      navigate("/adminnavbar");
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // Handle invalid email or password
        Swal.fire({
          icon: "error",
          title: "Login Failed!",
          text: "Invalid email or password.",
        });
      } else {
        // Handle other errors
        Swal.fire({
          icon: "error",
          title: "Login Failed!",
          text: "Error logging in as admin.",
        });
      }
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-slate-300">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col items-center">
        <h2 className="mt-10 text-2xl font-bold leading-9 text-gray-900">
          GLR ADMIN
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-900"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </div>
        </form>
      </div>

      <div className="mt-4 text-center text-sm text-gray-500">
        <span
          className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 cursor-pointer"
          onClick={handleLoginAsUser}
        >
          Login as user
        </span>
      </div>
    </div>
  );
};

export default GLRAdminForm;
