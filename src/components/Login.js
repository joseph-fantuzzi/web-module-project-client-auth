import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const loginURL = "http://localhost:9000/api/login";

const initialLoginForm = {
  username: "",
  password: "",
};

const Login = () => {
  const [loginForm, setLoginForm] = useState(initialLoginForm);
  const [loginMessage, setLoginMessage] = useState("");
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
    setLoginForm(initialLoginForm);
    axios
      .post(loginURL, loginForm)
      .then((res) => {
        window.localStorage.setItem("token", res.data.token);
        push("/friends");
      })
      .catch((err) => {
        setLoginMessage(err.response.data.error);
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            name="username"
            type="text"
            value={loginForm.username}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            name="password"
            type="password"
            value={loginForm.password}
            onChange={changeHandler}
          />
        </div>
        <button>Submit</button>
      </form>
      <p className="error-msg">{loginMessage}</p>
    </div>
  );
};

export default Login;
