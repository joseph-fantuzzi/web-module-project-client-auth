import React from "react";
import { useHistory } from "react-router-dom";
import axiosWithAuth from "../axios";

const logoutURL = "http://localhost:9000/api/logout";

const Logout = () => {
  const { push } = useHistory();

  const logoutHandler = () => {
    axiosWithAuth()
      .post(logoutURL)
      .then((res) => {
        window.localStorage.removeItem("token");
        push("/login");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="btn-container">
      <button className="btn" onClick={logoutHandler}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
