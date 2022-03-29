import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, NavLink, Switch, Redirect } from "react-router-dom";
import Login from "./components/Login";
import Logout from "./components/Logout";
import FriendList from "./components/FriendList";
import AddFriend from "./components/AddFriend";

function App() {
  return (
    <Router>
      <div className="App">
        <h2>Client Auth Project</h2>
        <NavLink to="login">Login</NavLink>
        <NavLink to="friends">Friend List</NavLink>
        <NavLink to="friends/add">Add Friend</NavLink>
        <NavLink to="logout">Logout</NavLink>
        <Switch>
          <Route path="/">
            <Login />
          </Route>
          <Route path="/login">
            <Redirect to="/" />
          </Route>
          <Route path="/friends">
            <FriendList />
          </Route>
          <Route path="/friends/add">
            <AddFriend />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
