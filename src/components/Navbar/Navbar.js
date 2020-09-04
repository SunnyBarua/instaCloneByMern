import React, { useContext } from "react";
import "./Navbar.css";
import { Link, useHistory } from "react-router-dom";
import { UserConext } from "../../App";

function Navbar() {
  const { state, dispatch } = useContext(UserConext);
  const history = useHistory();
  const renderList = () => {
    if (state) {
      return [
        <li key={Math.random()}>
          <Link to="/profile">Profile</Link>
        </li>,
        <li key={Math.random()}>
          <Link to="/create">Create Post</Link>
        </li>,
        <li key={Math.random()}>
          <Link to="/myfollowingspost">following Post</Link>
        </li>,
        <li key={Math.random()}>
          <button
            className="btn #c62828 red darken logout_button"
            onClick={() => {
              localStorage.clear();
              dispatch({ type: "CLEAR" });
              history.push("/signin");
            }}
          >
            Logout
          </button>
        </li>,
      ];
    } else {
      return [
        <li key={Math.random()}>
          <Link to="/signin">Sign In</Link>
        </li>,
        <li key={Math.random()}>
          <Link to="/signup">Sign Up</Link>
        </li>,
      ];
    }
  };

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to={state ? "/" : "/signin"} className="brand-logo">
          Instagram
        </Link>
        <ul id="nav-mobile" className="right">
          {renderList()}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
