"use client";

import { useState } from "react";
import { redirect } from "next/navigation";
import { LoginSchema, TLogin } from "@/utils/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { GoLock } from "react-icons/go";
import { MdOutlineEmail } from "react-icons/md";

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TLogin>({
    resolver: zodResolver(LoginSchema),
  });
  const processForm: SubmitHandler<TLogin> = async (data) => {
    const userInputs = LoginSchema.parse(data);
    const res = await signIn("credentials", {
      email: userInputs.email,
      password: userInputs.password,
    });
    if (res?.ok) {
      redirect("/profile");
    }
    if (res?.error) {
      return;
    }
    reset();
  };

  const [hide, setHide] = useState(true);
  const clickHandler = () => {
    setHide((prev) => !prev);
  };
  return (
    <>
      <form onSubmit={handleSubmit(processForm)} className="form__input">
        <Input
          id="email"
          label="Email"
          placeholder="email"
          register={register}
          errors={errors}
          name="email"
          type="email"
          icon={<MdOutlineEmail />}
        />
        <Input
          id="password"
          label="Password"
          placeholder=""
          register={register}
          errors={errors}
          name="password"
          type="password"
          icon={<GoLock />}
          clickHandler={clickHandler}
          state={hide}
          hideIcon={<BsEyeSlash />}
          showIcon={<BsEye />}
        />
        <div className="remember">
          <input type="checkbox" name="checkbox" id="remember" />
          <p>Remember me</p>
        </div>
        <Button
          outline
          label={isSubmitting ? "Loging In..." : "Log in"}
          disabled={isSubmitting}
        />
      </form>
      <div className="icons__wrapper">
        <p>Contact with</p>
        <div className="icons ">
          <div className="icon" onClick={() => signIn("google")}>
            <FaGoogle />
          </div>
          <div onClick={() => signIn("github")}>
            <FaGithub />
          </div>
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
        </div>
      </div>
    </>
  );
};

export default Form;
