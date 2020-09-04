import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { UserConext } from "../../App";

function SubscribesUserPosts() {
  const [data, setData] = useState([]);
  const { state, dispatch } = useContext(UserConext);
  useEffect(() => {
    fetch("https://insta-clone20.herokuapp.com/getsubpost", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setData(result.posts);
      });
  }, []);

  const likePost = (id) => {
    fetch("https://insta-clone20.herokuapp.com/like", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        postId: id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        const newData = data.map((item) => {
          if (item._id == result._id) {
            return result;
          } else {
            return item;
          }
        });
        setData(newData);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(data);
  const unlikePost = (id) => {
    fetch("https://insta-clone20.herokuapp.com/unlike", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        postId: id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        const newData = data.map((item) => {
          if (item._id == result._id) {
            return result;
          } else {
            return item;
          }
        });
        setData(newData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const makeComment = (text, postId) => {
    fetch("https://insta-clone20.herokuapp.com/comment", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        postId,
        text,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        const newData = data.map((item) => {
          if (item._id == result._id) {
            return result;
          } else {
            return item;
          }
        });
        setData(newData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deletePost = (postid) => {
    fetch(`https://insta-clone20.herokuapp.com/deletepost/${postid}`, {
      method: "delete",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        const newData = data.filter((item) => {
          return item._id !== result._id;
        });
        setData(newData);
      });
  };
  return (
    <div className="home">
      {data.map((item) => (
        <div className="card home__card" key={item._id}>
          <h5>
            <Link to={"/profile/" + item.postedBy._id}>
              {item.postedBy.name}
            </Link>{" "}
            {item.postedBy._id == state._id && (
              <i
                className="material-icons delete__icon"
                onClick={() => deletePost(item._id)}
              >
                delete
              </i>
            )}
          </h5>
          <div className="card__image">
            <img className="post__image" src={item.photo} />
          </div>
          <div className="card-content">
            <i className="material-icons">favorite</i>
            {item.likes.includes(state._id) ? (
              <i
                className="material-icons"
                onClick={() => {
                  unlikePost(item._id);
                }}
              >
                thumb_down
              </i>
            ) : (
              <i
                className="material-icons"
                onClick={() => {
                  likePost(item._id);
                }}
              >
                thumb_up
              </i>
            )}

            <h5>{item.likes.length} likes</h5>
            <h5>{item.title}</h5>
            <p>{item.body}</p>
            {item.comments.map((cmnt) => {
              return (
                <h6 key={cmnt._id}>
                  <span className="postedBy">{cmnt.postedBy.name}</span>
                  {cmnt.text}
                </h6>
              );
            })}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                makeComment(e.target[0].value, item._id);
                e.target[0].value = "";
              }}
            >
              <input type="text" placeholder="add a comment" />
            </form>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SubscribesUserPosts;
