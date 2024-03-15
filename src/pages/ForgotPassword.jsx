import { useForm } from "react-hook-form";
import logo from "../assets/images/logo.png";
import { ButtonPrimary, ButtonSecondary } from "../components";
import { Link } from "react-router-dom";

const Login2 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // submit form data to your backend here
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="py-14 w-[500px]">
        <div className="mb-5">
          <img src={logo} className="mx-auto" alt="logo" />
        </div>
        <h1 className="headtext">Forgot Password?</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="h-full w-full">
          <div className="login-form flex flex-col items-center justify-center pb-12 rounded-lg shadow-md h-full px-20">
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
                  placeholder="Enter your email"
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

              <div className="flex flex-col gap-3">
                <div className="flex flex-col space-y-2">
                  <ButtonPrimary type="submit">Send</ButtonPrimary>
                </div>
                <Link to="/login" className="flex flex-col space-y-2">
                  <ButtonSecondary type="submit">Cancel</ButtonSecondary>
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login2;
