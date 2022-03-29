import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import axiosWithAuth from "../axios";

const loginURL = "http://localhost:9000/api/login";

const initialLoginForm = {
  username: "",
  password: "",
};

const Login = () => {
  const [loginForm, setLoginForm] = useState(initialLoginForm);
  const { push } = useHistory();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(loginURL, loginForm)
      .then((res) => {
        window.localStorage.setItem("token", res.data.token);
        push("/friends");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="username">Username:</label>
          <input id="username" name="username" type="text" onChange={changeHandler} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input id="password" name="password" type="password" onChange={changeHandler} />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;
