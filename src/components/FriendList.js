import React, { useState, useEffect } from "react";
import axiosWithAuth from "../axios";

const friendsURL = "http://localhost:9000/api/friends";

const FriendList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    getFriends();
  }, []);

  const getFriends = () => {
    axiosWithAuth()
      .get(friendsURL)
      .then((res) => {
        setFriends(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <h2>Friend List</h2>
      <ul className="friend-list">
        {friends.map((friend) => {
          return (
            <li key={friend.id}>
              {friend.name} - {friend.age} - {friend.email}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FriendList;
