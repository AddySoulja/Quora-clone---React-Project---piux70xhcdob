import React, { useCallback, useEffect, useState } from "react";
import SidebarOptions from "./sidebar/SidebarOptions";
import {
  fetchPosts,
  userDetails,
  addPost,
} from "../../firebase/firebaseMethods";
import { Link, useNavigate } from "react-router-dom";
import Post from "./post/Post";
import "./dashboard.css";
import { auth } from "../../firebase/firebase";

export const postFormat = {
  id: "",
  question: "",
  questionedby: "",
  answers: [],
  likes: 0,
};

export const answerFormat = {
  answer: "",
  answeredby: "",
  likes: 0,
};
const Dashboard = ({ keyword }) => {
  const [name, setName] = useState("");
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState(postFormat);
  const navigate = useNavigate();

  const handleInput = (e) => {
    const value = e.target.value;
    setPost({ ...post, question: value });
  };
  // const updatePosts = useCallback(async () => {
  //   const fetched = await fetchPosts();
  //   setPosts(fetched);
  // }, [setPosts]);

  // const handlePost = async (e) => {
  //   e.preventDefault();
  //   if (post.question === "") {
  //     alert("Please type your question before posting!");
  //     return;
  //   }
  //   await addPost({
  //     ...post,
  //     questionedby: name,
  //   });

  //   updatePosts();
  //   setPost(postFormat);
  // };

  // useEffect(() => {
  //   const userId = auth.currentUser.uid;
  //   const details = userDetails(userId);
  //   details.then((user) => setName(user.username));

  //   updatePosts();
  // }, [updatePosts]);

  return (
    <>
      <div className="dashboard-layout">
        <SidebarOptions />
        <div className="feeds-layout">
          <div className="post-status">
            <form
            // onSubmit={(e) => handlePost(e)}
            >
              <div className="top">
                <div>
                  <div className="profile">
                    <img
                      src="https://miro.medium.com/max/450/1*Wrm0UtVJZH8Gl_vsOWBYyg.png"
                      alt="profile"
                    ></img>
                  </div>
                  <div className="username-display">{name}</div>
                </div>
                <div className="text-field">
                  <input
                    type="text"
                    name="question"
                    placeholder="What do you want to ask or share?"
                    value={post.question}
                    onChange={(e) => handleInput(e)}
                  />
                </div>
              </div>
              <div className="bottom">
                <Link to="/add-a-question">
                  <div className="ask">Ask</div>
                </Link>
                <div className="separator">|</div>
                <Link to="/answer-a-question">
                  <div className="answer">Answer</div>
                </Link>
                <div className="separator">|</div>
                <button type="submit" className="post">
                  Post
                </button>
              </div>
            </form>
          </div>
          {posts.map((post) =>
            post.question.toLowerCase().includes(keyword.toLowerCase()) ? (
              <Post
                data={post}
                // refreshPosts={updatePosts}
                user={name}
                key={post.id}
              />
            ) : (
              ""
            )
          )}
        </div>
        <div className="suggested-layout">
          {posts.map((post) =>
            post.question.toLowerCase().includes(keyword.toLowerCase()) ? (
              <div
                className="suggested"
                key={post.id}
                onClick={() => navigate("/answer-a-question")}
              >
                {post.question}
              </div>
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </>
  );
};
export default Dashboard;
