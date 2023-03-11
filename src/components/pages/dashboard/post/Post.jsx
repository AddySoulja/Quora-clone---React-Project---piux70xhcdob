import React, { useEffect, useState } from "react";
import { MoreVert } from "@mui/icons-material";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { addAnswers, deletePost } from "../../../firebase/firebaseMethods";
import "./post.css";
import { answerFormat } from "../Dashboard";

const Post = ({ data, refreshPosts, user }) => {
  const { id, question, questionedby, answers } = data;
  const [showAnswers, setShowAnswers] = useState(false);
  const [answer, setAnswer] = useState(answerFormat);
  const [questionOnDisplay, setQuestionOnDisplay] = useState(data);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = async () => {
    setAnchorEl(null);
  };

  const handleDelete = async () => {
    await deletePost(id);
    handleClose();
    refreshPosts();
  };

  const addAnswer = async (e) => {
    e.preventDefault();
    if (answer.answer === "") {
      alert("Please type your answer before posting!");
      return;
    }
    setQuestionOnDisplay({
      ...questionOnDisplay,
      answers: [...answers, answer],
    });
    await updateQuestion();
    refreshPosts();
    setAnswer(answerFormat);
  };

  const updateQuestion = async () => {
    await addAnswers(questionOnDisplay);
  };
  useEffect(() => {
    updateQuestion();
  }, [questionOnDisplay]);

  return (
    <div className="post-layout" key={id}>
      <div className="post-content">
        <div>
          <div className="profile">
            <img
              src="https://miro.medium.com/max/450/1*Wrm0UtVJZH8Gl_vsOWBYyg.png"
              alt="profile"
            ></img>
          </div>
          <div className="username-display">{questionedby}</div>
        </div>
        <div className="question">{question}</div>
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? "long-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVert />
        </IconButton>
        <Menu
          id="long-menu"
          MenuListProps={{
            "aria-labelledby": "long-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: 40 * 4.5,
              width: "auto",
            },
          }}
        >
          <MenuItem onClick={handleDelete}>Delete</MenuItem>
        </Menu>
      </div>
      <div className="post-details">
        <div className="likes-span">0 likes</div>
        <div className="answers-span">{answers.length} answers</div>
      </div>
      <div className="controls">
        <div className="like">Like</div>
        <div className="separator">|</div>
        <div className="comment" onClick={() => setShowAnswers(!showAnswers)}>
          Answer
        </div>
        <div className="separator">|</div>
        <div className="share">share</div>
      </div>
      {showAnswers
        ? answers.map((answer) => (
            <>
              <div style={{ marginTop: "8px" }}>{`Ans: ${answer.answer}`}</div>
              <div>{`By: ${answer.answeredby}`}</div>
            </>
          ))
        : ""}
      {showAnswers ? (
        <form onSubmit={(e) => addAnswer(e)} className="input controls">
          <div className="text-field">
            <input
              type="text"
              onChange={(e) =>
                setAnswer({
                  ...answer,
                  answer: e.target.value,
                  answeredby: user,
                })
              }
              value={answer.answer}
            />
          </div>
          <button type="submit" className="btn">
            Add
          </button>
        </form>
      ) : (
        ""
      )}
    </div>
  );
};

export default Post;
