import React from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useAuth } from "../Context/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {
  const [authUser, setAuthUser] = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    axios.post("/api/user/login", userInfo)
      .then((response) => {
        if (response.data) {
          alert("Login Successfully");
          localStorage.setItem("ChatApp", JSON.stringify(response.data));
          setAuthUser(response.data); // Ensure this sets user state correctly
        }
      })
      .catch((error) => {
        if (error.response) {
          alert("Error: " + error.response.data.error);
        } else {
          alert("Network Error");
        }
      });
  };

  return (
    <div className="flex h-screen items-center justify-center bg-black">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border border-white rounded-lg space-y-4 w-1/2 bg-gray-800 p-4"
      >
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-white text-2xl mt-4">
            Chat <span className="font-semibold text-yellow-200">App</span>
          </h1>
          <h2 className="text-white text-2xl mb-4 mt-4 text-green-300">
            Login
          </h2>
        </div>

        {/* Email */}
        <label className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="email"
            className="grow rounded-lg bg-slate-500 p-2 placeholder:text-gray-300"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
          />
        </label>
        {errors.email && <span className="text-red-500 font-semibold">This field is required</span>}

        {/* Password */}
        <label className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 1 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="password"
            className="grow rounded-lg bg-slate-500 p-2 placeholder:text-gray-300"
            placeholder="Password"
            {...register("password", { required: "Password is required" })}
          />
        </label>
        {errors.password && <span className="text-red-500 font-semibold">This field is required</span>}

        {/* Text and Button */}
        <div className="flex justify-between items-center">
          <p className="text-white">
            New User? <Link to="/signup" className="text-green-300 underline cursor-pointer">Signup</Link>
          </p>
          <input
            type="submit"
            value="Login"
            className="text-green-300 font-semibold rounded-lg text-white w-24 h-7 cursor-pointer border border-green-300 hover:bg-green-500"
          />
        </div>
      </form>
    </div>
  );
};

export default Login;