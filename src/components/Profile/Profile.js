import React, { useEffect, useState, useContext } from "react";
import "./Profile.css";
import { UserConext } from "../../App";

function Profile() {
  const [mypics, setPics] = useState([]);
  const [image, setImage] = useState("");

  const { state, dispatch } = useContext(UserConext);
  useEffect(() => {
    fetch("https://insta-clone20.herokuapp.com/mypost", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setPics(result.mypost);
      });
  }, []);
  useEffect(() => {
    if (image) {
      const data = new FormData();
      data.append("file", image);
      data.append("upload_preset", "insta-clone");
      data.append("cloud_name", "sunnybd");
      fetch("https://api.cloudinary.com/v1_1/sunnybd/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          // localStorage.setItem(
          // "user",
          // JSON.stringify({ ...state, pic: data.url })
          // );
          // dispatch({ type: "UPDATEPIC", payload: data.url });
          fetch("https://insta-clone20.herokuapp.com/updatepic", {
            method: "put",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("jwt"),
            },
            body: JSON.stringify({
              pic: data.url,
            }),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              localStorage.setItem(
                "user",
                JSON.stringify({ ...state, pic: result.pic })
              );
              dispatch({ type: "UPDATEPIC", payload: result.pic });
              window.location.reload();
            });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [image]);
  const updatePhoto = (file) => {
    setImage(file);
  };
  return (
    <div className="profile__and__gallary">
      <div className="profile">
        <div className="profile__Picture__Update">
          <img className="profile__img" src={state ? state.pic : "loading"} />

          <div className="file-field input-field">
            <div className="btn waves-light ">
              <span>Update Picture</span>
              <input
                type="file"
                onChange={(e) => updatePhoto(e.target.files[0])}
              />
            </div>
            <div className="file-path-wrapper">
              <input className="file-path validate" type="text" />
            </div>
          </div>
        </div>

        <div className="profile__alldetails">
          <div className="profile__name">
            <h4>{state ? state.name : "loading"}</h4>
            <h5>{state ? state.email : "loading"}</h5>
          </div>
          <div className="profile__details">
            <h6>{mypics.length} posts</h6>
            <h6>{state ? state.followers.length : "0"} follower</h6>
            <h6>{state ? state.following.length : "0"} following</h6>
          </div>
        </div>
      </div>
      <div className="gallary">
        {mypics.map((item) => {
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
  );
}

export default Profile;
