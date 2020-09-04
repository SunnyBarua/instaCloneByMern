import React, { createContext, useReducer, useEffect, useContext } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";

import Profile from "./components/Profile/Profile";
import Signup from "./components/Signup/Signup";
import Signin from "./components/Sign In/Signin";

import Userprofile from "./components/UserProfile/Userprofile";
import { reducer, initialState } from "./reducers/userReducer";
import SubscribesUserPosts from "./components/SubscribesUserPosts/SubscribesUserPosts";
import Createpost from "./components/CreatePost/Createpost";
import Home from "./components/Home/Home";
export const UserConext = createContext();

const Routing = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(UserConext);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch({ type: "USER", payload: user });
    } else {
      history.push("/signin");
    }
  }, []);
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/signin">
        <Signin />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
      <Route path="/create">
        <Createpost />
      </Route>
      <Route path="/profile/:userId">
        <Userprofile />
      </Route>
      <Route path="/myfollowingspost">
        <SubscribesUserPosts />
      </Route>
    </Switch>
  );
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserConext.Provider value={{ state, dispatch }}>
      <div className="App">
        <Router>
          <Navbar />
          <Routing />
        </Router>
      </div>
    </UserConext.Provider>
  );
}

export default App;
