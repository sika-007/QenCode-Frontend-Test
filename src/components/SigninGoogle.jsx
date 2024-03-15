import google from "../assets/images/google.png";

const SigninGoogle = () => {
  return (
    <div className="flex justify-center items-center gap-2 p-2 border border-gray-300 rounded-lg w-full cursor-pointer">
      <img src={google} alt="google login" />
      <p>Google</p>
    </div>
  );
};

export default SigninGoogle;
