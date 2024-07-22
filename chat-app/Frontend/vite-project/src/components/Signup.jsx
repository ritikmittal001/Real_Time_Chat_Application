import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "../Context/AuthProvider";
import { Link } from "react-router-dom";

const Signup = () => {
  const [authUser,setAuthUser]=useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // Form submission logic here
    const userInfo = {
      fullName: data.fullName, // Updated field name
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
    };

    await axios
      .post("/api/user/signup", userInfo)
      .then((response) => {
        // console.log(response);
        if (response.data) {
          alert("Signup Successfully");
        }
        localStorage.setItem("ChatApp", JSON.stringify(response.data));
        setAuthUser(response.data);
      })
      .catch((error) => {
        // console.error("Signup Error: ", error);
        if (error.response) {
          alert("Error: " + error.response.data.error);
        }
      });
  };

  return (
    <div>
      <div className="flex h-screen items-center justify-center bg-black">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border border-white rounded-lg space-y-4 w-96"
        >
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-white text-2xl mt-4">
              Chat <span className="font-semibold text-yellow-200">App</span>
            </h1>
            <h2 className="text-white text-2xl mb-4 mt-4 mr-52 text-green-300">
              SignUp
            </h2>
          </div>

          {/* Full Name */}
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              className="grow rounded-lg bg-slate-500 text-black mr-4 placeholder:pl-3"
              placeholder="Full Name"
              {...register("fullName", { required: true })} // Updated field name
            />
          </label>
          {errors.fullName && (
            <span className="text-red-500 font-semibold ml-3">
              This field is required
            </span>
          )}

          {/* Email */}
          <label className="input input-bordered flex items-center gap-2">
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
              className="grow rounded-lg bg-slate-500 mr-4 mt-3 placeholder:pl-3"
              placeholder="Email"
              {...register("email", { required: true })}
            />
          </label>
          {errors.email && (
            <span className="text-red-500 font-semibold ml-3">
              This field is required
            </span>
          )}

          {/* Password */}
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              className="grow rounded-lg bg-slate-500 mr-4 mt-3 placeholder:pl-3"
              placeholder="Password"
              {...register("password", { required: true })}
            />
          </label>
          {errors.password && (
            <span className="text-red-500 font-semibold ml-3">
              This field is required
            </span>
          )}

          {/* Confirm Password */}
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              className="grow rounded-lg bg-slate-500 mr-4 mt-3 placeholder:pl-2"
              placeholder="Confirm Password"
              {...register("confirmPassword", {
                required: true,
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
            />
          </label>
          {errors.confirmPassword && (
            <span className="text-red-500 font-semibold ml-3">
              {errors.confirmPassword.message}
            </span>
          )}

          {/* Text and Button */}
          <div className="flex justify-around">
            <p className="text-white">
              Have an account?{" "}
              <Link to="/login" className="text-green-300 underline">Login</Link>
            </p>
            <input
              type="submit"
              value="Signup"
              className="text-green-300 font-semibold rounded-lg ml-16 text-white w-24 h-7 mb-4 cursor-pointer border border-collapse bg-blue-500 font-semibold"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
