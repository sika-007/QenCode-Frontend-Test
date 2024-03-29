import { Controller, useForm } from "react-hook-form";
import logo from "../assets/images/logo.png";
import eye from "../assets/images/eye.png";
import { zodResolver } from "@hookform/resolvers/zod";
import { ButtonPrimary } from "../components";
import { useState } from "react";
import { z } from "zod";
import axios from "axios";

const schema = z
  .object({
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

const ChangePassword = () => {
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
  } = useForm({ resolver: zodResolver(schema) });

  const [showPassword, setShowPassword] = useState(false);
  const [msg, setMsg] = useState("");

  const onSubmit = async (data) => {
    const url = import.meta.env.VITE_BACKEND_URL;
    try {
      const response = await axios.post(`${url}/v1/auth/password-set`, {
        token: "astringthatworks", // This value is supposed to come from local storage
        secret: import.meta.env.VITE_QENCODE_SECRET,
        password: data.password,
        password_confirm: data.confirmPassword,
      });
      console.log(response.data.detail);
      setMsg(response.data.detail);
    } catch (error) {
      setMsg(error.response.data.detail[0].error);
      if (typeof error.response.data.detail === "string") {
        setMsg(error.response.data.detail);
      }
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="py-14 px-4 w-[500px]">
        <div className="mb-5">
          <img src={logo} className="mx-auto" alt="logo" />
        </div>
        <h1 className="headtext">Create new Password</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="h-full w-full">
          <div className="login-form flex flex-col items-center justify-center py-12 rounded-lg shadow-md h-full px-10 md:px-20 gap-3">
            <div className="flex flex-col w-full mt-2">
              <div
                className={`flex items-center px-4 py-2 rounded-md border has-[:focus]:ring-1 ring-blue-600 border-gray-300 focus:outline-none  ${
                  errors.password && "border-red-500"
                }`}
              >
                <Controller
                  name="password"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      type={showPassword ? "text" : "password"}
                      {...field}
                      placeholder="password"
                      className={`flex-1 rounded-md focus:outline-none focus:ring-0 group-focus:ring-1 group-focus:ring-black ${
                        errors.password && "border-red-500"
                      }`}
                    />
                  )}
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
            </div>
            <div className="flex flex-col w-full mb-4">
              <div
                className={`flex items-center px-4 py-2 rounded-md border has-[:focus]:ring-1 ring-blue-600 border-gray-300 focus:outline-none  ${
                  errors.password && "border-red-500"
                }`}
              >
                <Controller
                  name="confirmPassword"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      type={showPassword ? "text" : "password"}
                      {...field}
                      id="confirm-password"
                      placeholder="confirm password"
                      className={`flex-1 rounded-md focus:outline-none focus:ring-0 group-focus:ring-1 group-focus:ring-black ${
                        errors.confirmPassword && "border-red-500"
                      }`}
                    />
                  )}
                />
                <div
                  className="w-5 h-5"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  <img src={eye} alt="see" />
                </div>
              </div>
              {errors.confirmPassword ? (
                <p className="text-sm text-red-500">
                  {errors.confirmPassword.message}
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="flex flex-col space-y-2 w-full">
              <ButtonPrimary disabled={isSubmitting} type="submit">
                Reset Password
              </ButtonPrimary>
            </div>
            <p className="text-sm text-red-500 mt-3">{msg}</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
