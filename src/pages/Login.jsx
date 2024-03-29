import { useForm } from "react-hook-form";
import logo from "../assets/images/logo.png";
import { ButtonPrimary, Or, SigninGithub, SigninGoogle } from "../components";
import { Link } from "react-router-dom";
import { useState } from "react";
import eye from "../assets/images/eye.png";
import axios from "axios";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [msg, setMsg] = useState("");

  const onSubmit = async (data) => {
    const url = import.meta.env.VITE_BACKEND_URL;
    try {
      const response = await axios.post(`${url}/v1/auth/login`, {
        ...data,
      });
      console.log(response.data.response.data.detail);
      setMsg(response.data.response.data.detail);
    } catch (error) {
      setMsg(error.response.data.detail);
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="py-14 px-4 w-[500px]">
        <div className="mb-5">
          <img src={logo} className="mx-auto" alt="logo" />
        </div>
        <h1 className="headtext">Log in to your account</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="h-full w-full">
          <div className="login-form flex flex-col items-center justify-center py-8 rounded-lg shadow-md h-full px-10 md:px-20">
            <div className="flex items-center justify-center gap-4 my-3 w-full">
              <SigninGoogle />
              <SigninGithub />
            </div>
            <div className="my-5 w-full">
              <Or />
            </div>
            <div className="flex flex-col w-full mt-2">
              <div className="flex flex-col mb-4">
                <input
                  type="text"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value:
                        /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                      message: "not a valid email address!!",
                    },
                  })}
                  id="email"
                  placeholder="email"
                  className={`flex-1 px-4 py-2 rounded-md border w-full focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                    errors.email && "border-red-500"
                  }`}
                />
                {errors.email ? (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                ) : (
                  ""
                )}
              </div>
              <div
                className={`flex items-center px-4 py-2 rounded-md border has-[:focus]:ring-1 ring-blue-600 border-gray-200 focus:outline-none  ${
                  errors.password && "border-red-500"
                }`}
              >
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "password isn't strong enough",
                    },
                  })}
                  id="password"
                  placeholder="password"
                  className={`flex-1 rounded-md focus:outline-none focus:ring-0 group-focus:ring-1 group-focus:ring-black ${
                    errors.password && "border-red-500"
                  }`}
                />
                <div
                  className="w-5 h-5"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  <img src={eye} alt="see" />
                </div>
              </div>
              {errors.password ? (
                <p className="text-sm text-red-500">
                  {errors.password.message}
                </p>
              ) : (
                ""
              )}
              <Link
                className="text-blue-700 ml-auto my-4"
                to="/forgot-password"
              >
                Forgot Password?
              </Link>
              <div className="flex flex-col space-y-2">
                <ButtonPrimary disabled={isSubmitting} type="submit">
                  Log in to Qencode
                </ButtonPrimary>
              </div>
            </div>
            <p className="text-sm text-red-500 mt-4">{msg}</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
