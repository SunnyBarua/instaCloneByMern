import React, { useEffect, useState, useContext } from "react";
import { UserConext } from "../../App";
import { useParams } from "react-router-dom";
import "./Userprofile.css";

function Userprofile() {
  const [profile, setProfile] = useState(null);

  const { state, dispatch } = useContext(UserConext);

  const { userId } = useParams();
  const [showfollow, setShowfollow] = useState(
    state ? !state.following.includes(userId) : true
  );

  useEffect(() => {
    fetch(`https://insta-clone20.herokuapp.com/user/${userId}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        setProfile(result);
      });
  }, []);
  console.log(profile);

  const FollowUser = () => {
    fetch("https://insta-clone20.herokuapp.com/follow", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        followId: userId,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch({
          type: "UPDATE",
          payload: { following: data.following, followers: data.followers },
        });
        localStorage.setItem("user", JSON.stringify(data));
        setProfile((prevState) => {
          return {
            ...prevState,
            user: {
              ...prevState.user,

              followers: [...prevState.user.followers, data._id],
            },
          };
        });
        setShowfollow(false);
      });
  };

  const UnfollowUser = () => {
    fetch("https://insta-clone20.herokuapp.com/unfollow", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        unfollowId: userId,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch({
          type: "UPDATE",
          payload: { following: data.following, followers: data.followers },
        });
        localStorage.setItem("user", JSON.stringify(data));
        setProfile((prevState) => {
          const newFollower = prevState.user.followers.filter(
            (item) => item != data._id
          );
          return {
            ...prevState,
            user: {
              ...prevState.user,
              followers: newFollower,
            },
          };
        });
        setShowfollow(true);
      });
  };

  return (
    <>
      {profile ? (
        <div className="profile__and__gallary">
          <div className="profile">
            <div>
              <img className="profile__img" src={profile.user.pic} />
            </div>
            <div className="profile__alldetails">
              <div className="profile__name">
                <h4>{profile.user.name}</h4>
                <h5>{profile.user.email}</h5>
              </div>
              <div className="profile__details">
                <h6>{profile.posts.length} posts</h6>
                <h6>{profile.user.followers.length} followers</h6>
                <h6>{profile.user.following.length} following</h6>
              </div>
              {showfollow ? (
                <button
                  className="btn waves-effect waves-light"
                  onClick={() => FollowUser()}
                >
                  Follow
                </button>
              ) : (
                <button
                  className="btn waves-effect waves-light"
                  onClick={() => UnfollowUser()}
                >
                  UnFollow
                </button>
              )}
            </div>
          </div>
          <div className="gallary">
            {profile.posts.map((item) => {
              return (
                <img
                  className="item"
                  key={item._id}
                  src={item.photo}
                  alt={item.title}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <h2>loading...!</h2>
      )}
    </>
  );
}

export default Userprofile;
