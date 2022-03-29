import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, NavLink, Switch, Redirect } from "react-router-dom";
import Login from "./components/Login";
import Logout from "./components/Logout";
import FriendList from "./components/FriendList";
import AddFriend from "./components/AddFriend";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Friends Database</h1>
        <NavLink className="links" to="/login">
          Login
        </NavLink>
        <NavLink className="links" to="/friends">
          Friend List
        </NavLink>
        <NavLink className="links" to="/friends/add">
          Add Friend
        </NavLink>
        <NavLink className="links" to="/logout">
          Logout
        </NavLink>
        <Switch>
          <PrivateRoute path="/friends/add" component={AddFriend} />
          <PrivateRoute path="/friends" component={FriendList} />
          <PrivateRoute path="/logout" component={Logout} />
          <Route path="/login">
            <Redirect to="/" />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
