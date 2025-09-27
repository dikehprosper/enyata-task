import Logo from "../atoms/Logo";
import LoginForm from "../molecules/LoginForm";

const LoginPage = () => {


  return (
    <div className="flex h-[100vh] ">
      <div className="bg-[#031434] w-[30%] p-[48px] flex justify-center items-center">
        <Logo className="w-[100%]" />
      </div>
      <div className="flex w-[70%] justify-center items-center">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;