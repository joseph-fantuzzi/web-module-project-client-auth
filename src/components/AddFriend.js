import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axiosWithAuth from "../axios";
import { friendsURL } from "./FriendList";

const initialFriendForm = {
  name: "",
  age: "",
  email: "",
};

const AddFriend = () => {
  const [friendForm, setFriendForm] = useState(initialFriendForm);
  const { push } = useHistory();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFriendForm({
      ...friendForm,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addFriend();
  };

  const addFriend = () => {
    axiosWithAuth()
      .post(friendsURL, friendForm)
      .then((res) => {
        push("/friends");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <h2>Add Friend</h2>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">Name:</label>
          <input id="name" name="name" type="text" onChange={changeHandler} />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input id="age" name="age" type="text" onChange={changeHandler} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input id="email" name="email" type="email" onChange={changeHandler} />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddFriend;
