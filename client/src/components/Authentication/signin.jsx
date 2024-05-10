import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/login", {
        email,
        password,
      });
      const token = response.data.token;
      // Display success message
      Swal.fire({
        icon: "success",
        title: "Login Successful!",
        text: "You have successfully logged in.",
      });
      navigate("/");
      // Store the token in local storage or context for future requests
      localStorage.setItem("authToken", token);
      // Redirect to another page or update the state to indicate successful login
      console.log("Login successful:", token);
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
          text: "Error logging in.",
        });
      }
    }
  };

  return (
    <div
      className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-slate-300"
      style={{ borderRadius: "0.375rem" }}
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col items-center">
        <svg
          className="w-10 h-10 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="124"
          height="124"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
            clipRule="evenodd"
          />
        </svg>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Enter your Email :
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Enter your Password :
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <a
            href="/signup"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Register here for free
          </a>
        </p>
        <p className="mt-4 text-center text-sm text-gray-500">
          Are you an Admin?
          <span
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            onClick={() => navigate("/glradmin")}
          >
            Click here to login as an admin
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
