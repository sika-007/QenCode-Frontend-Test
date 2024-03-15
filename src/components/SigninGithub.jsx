import github from "../assets/images/github.png";

const SigninGithub = () => {
  return (
    <div className="flex justify-center items-center gap-2 p-2 border border-gray-300 rounded-lg w-full cursor-pointer">
      <img src={github} alt="google login" />
      <p>github</p>
    </div>
  );
};

export default SigninGithub;
