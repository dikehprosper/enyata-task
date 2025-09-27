import  { useState } from "react";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import Link from "../atoms/Link";
import { useNavigate } from "react-router-dom";
import { validateEmail, isPasswordValid } from "../utils/helpers";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState({
    email: null,
    password: null,
    message: null,
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    if (trimmedEmail === '') {
      setIsError({
        email: true,
        password: null,
        message: "required",
      });
      return;
    }

    if (!validateEmail(trimmedEmail)) {
      setIsError({
        email: true,
        password: null,
        message: "not a valid email",
      });
      return;
    }

    if (trimmedPassword === "") {
      setIsError({
        email: null,
        password: true,
        message: "required",
      });
      return;
    }

    if (isPasswordValid(trimmedPassword)) {
      navigate("/dashboard/overview");
      return;
    }

    setIsError({
      email: null,
      password: true,
      message: "must contain a number, letter and min. of 8 characters",
    });
  };

  return (
    <div className="w-[467px] scale-[0.9] border border-[#a4a7b780] rounded-[8px] pt-[36px] px-[66px] pb-[38px] ">
      <p className="text-[#434854] text-[24px] font-[600] mb-[8px]">Login</p>
      <p className="text-[#737373] text-[16px] font-[400]">
        Kindly enter your details to log in
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-[32px] mt-[54px]">
        <Input
          placeholder="Email Address"
          height={48}
          className={`${isError.email ? "error" : ""}`}
          type="email"
          value={email}
          onChange={(e) =>
            isError.email
              ? setIsError({ ...isError, email: false })
              : setEmail(e.target.value)
          }
          message={isError.email && isError.message}
        />
        <Input
          height={48}
          placeholder="Password"
          className={`bg-white dark:bg-black ${isError.password ? "error" : ""}`}
          type="password"
          value={password}
          onChange={(e) =>
            isError.password
              ? setIsError({ ...isError, password: false })
              : setPassword(e.target.value)
          }
          message={isError.password && isError.message}
        />
        <Button type="submit">Login</Button>
      </form>

      <p className="text-[14px] text-[#0a74dc] text-center no-underline mt-[28px]">
        <span>
          <Link> Forgot your password?</Link>
        </span>
      </p>

      <p className=" text-[12px] font-[400] text-center mt-[96px]">
        <span className="text-[#737373] dark:white text-[12px]">
          <Link className='mr-[5px] underline underline-offset-2' >Privacy Policy</Link>
        </span>
        <span className="mx-1 text-[#b0b9c8] dark:white/70">and</span>
        <span className="text-[#737373] dark:white text-[12px]">
          <Link className='ml-[5px] underline underline-offset-2'>Terms of services</Link>
        </span>
      </p>


    </div>
  );
};

export default LoginForm;