import { useForm } from "react-hook-form";
import React, { useState } from "react";
export default function IndexPage() {
  const [data, setData] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onValid = (data) => {
    setData(data);
  };

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <div>
        <span>Name: </span>
        <input type="text" {...register("username", { required: "Please write down your name." })} placeholder="" />
        {errors.username?.message}
      </div>
      <div>
        <span>email: </span>
        <input
          type="email"
          {...register("email", {
            required: "Please write down your email.",
            validate: {
              naverMail: (value) => value.includes("@naver.com") || "Only @naver email allowed.",
            },
          })}
          placeholder="Only @naver.com"
        />
        {errors.email?.message}
      </div>
      <div>
        <span>Password: </span>
        <input
          type="password"
          {...register("password", {
            required: "Please write down your password.",
            minLength: {
              message: "Password has to be more than 10 chars.",
              value: 10,
            },
          })}
          placeholder="Min 10 characters"
        />
        {errors.password?.message}
      </div>

      <input type="submit" value="Log in" />
      <div>
        <span>{data ? "Thank you" : null}</span>
      </div>
    </form>
  );
}
