import { useForm } from "react-hook-form";
import React, { useState } from "react";
import Form from "./components/Form";
export default function IndexPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const [login, setLogin] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (username === "") {
      setNameError("Please write down your Name");
    }
    if (email === "") {
      setEmailError("Please write down your Email");
    }
    if (password.length < 9) {
      setPassError("Please write down your password");
    }
    if (username !== "" && email.includes("@naver.com") && password.length >= 9) {
      setLogin("Thank you");
    }
  };

  const onChangeUserName = (e) => {
    setUsername(e.target.value);
    // if (username.length >= 0) {
    //   setNameError("");
    // }
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
    // if (!email.includes("@naver.com")) {
    //   setEmailError("Only @naver emails allowed");
    // } else if (email.includes("@naver.com") && email.length >= 0) {
    //   setEmailError("");
    // }
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
    // if (password.length < 9) {
    //   setPassError("Password has to be more than 10 char.");
    // } else {
    //   setPassError("");
    // }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <Form title="Name" type="text" msg={nameError} placeholder="" value={username} onChange={onChangeUserName} />
        <Form
          title="Email"
          type="email"
          msg={emailError}
          placeholder="Only @naver.com"
          value={email}
          onChange={onChangeEmail}
        />
        <Form
          title="Password"
          type="password"
          msg={passError}
          placeholder="Min 10 characters"
          value={password}
          onChange={onChangePassword}
        />
        <button>Log in</button>
      </form>
      <div>{login}</div>
    </>
  );
}
