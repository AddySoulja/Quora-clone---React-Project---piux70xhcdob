import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { addPost, userDetails } from "../../firebase/firebaseMethods";
import Navbar from "../../navbar/Navbar";
import { postFormat } from "../dashboard/Dashboard";
import "./addQuestion.css";

const AddQuestion = () => {
  const [name, setName] = useState("");
  const [post, setPost] = useState(postFormat);
  const [questions, setQuestions] = useState([]);
  // const addHandler = (e) => {
  //   e.preventDefault();
  //   if (post.question === "") {
  //     alert("Please type your question before submitting!");
  //     return;
  //   }
  //   addPost(post);
  //   setQuestions([...questions, post]);
  //   setPost(postFormat);
  // };

  // useEffect(() => {
  //   const userId = auth.currentUser.uid;
  //   const details = userDetails(userId);
  //   details.then((user) => setName(user.username));
  // }, []);

  return (
    <>
      <Navbar />
      <div className="add-page-layout">
        <div className="add-layout">
          <form
            // onSubmit={addHandler}
            className="form"
          >
            <input
              type="text"
              className="question-input"
              value={post.question}
              placeholder="Ask your questions here..."
              onChange={(e) =>
                setPost({
                  ...post,
                  question: e.target.value,
                  questionedby: name,
                })
              }
            />
            <div className="btn-controls">
              <Link to="/" className="btn">
                Cancel
              </Link>
              <button type="submit" className="btn">
                Add
              </button>
            </div>
          </form>

          <div className="heading">
            {questions.length > 0 ? "Questions by you" : ""}
          </div>
          <div className="added">
            {questions
              ? questions.map((question) => (
                  <div className="question">{question.question}</div>
                ))
              : ""}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddQuestion;
