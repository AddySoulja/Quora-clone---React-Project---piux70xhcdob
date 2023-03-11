import React, { useCallback, useEffect, useState } from "react";
import Navbar from "../../navbar/Navbar";
import "./ansQuestion.css";
import { Link } from "react-router-dom";
import {
  addAnswers,
  fetchPosts,
  userDetails,
} from "../../firebase/firebaseMethods";
import { auth } from "../../firebase/firebase";
import { answerFormat, postFormat } from "../dashboard/Dashboard";

const AnsQuestion = () => {
  const [name, setName] = useState("");
  const [questionList, setQuestionList] = useState([]);
  const [questionOnDisplay, setQuestionOnDisplay] = useState(postFormat);
  const [answer, setAnswer] = useState(answerFormat);

  // const updatePosts = useCallback(async () => {
  //   const fetched = await fetchPosts();
  //   setQuestionList(fetched);
  // }, [setQuestionList]);

  // useEffect(() => {
  //   const userId = auth.currentUser.uid;
  //   const details = userDetails(userId);
  //   details.then((user) => setName(user.username));
  //   updatePosts();
  // }, [updatePosts]);

  // const addAnswer = (e) => {
  //   e.preventDefault();
  //   if (answer.answer === "") {
  //     alert("Please type your answer before posting!");
  //     return;
  //   }
  //   setQuestionOnDisplay({
  //     ...questionOnDisplay,
  //     answers: [...questionOnDisplay.answers, { ...answer }],
  //   });
  //   updatePosts();
  //   setAnswer(answerFormat);
  // };

  // useEffect(() => {
  //   addAnswers(questionOnDisplay);
  // }, [questionOnDisplay]);
  return (
    <>
      <Navbar />
      <form
        // onSubmit={(e) => addAnswer(e)}
        className="ans-page-layout"
      >
        <div className="ans-layout">
          <div className="select-questions">
            {questionList.map((question) => (
              <div
                className="question-btn"
                onClick={() => setQuestionOnDisplay(question)}
              >
                {question.question}
              </div>
            ))}
          </div>
          <div className="display-questions">
            <div className="display">
              {questionOnDisplay.question !== "" ? (
                <>
                  <div className="heading">Answer selected question</div>
                  <div className="question-thread">
                    {`Question: ${questionOnDisplay.question}`}
                    <div>{`By: ${questionOnDisplay.questionedby}`}</div>
                  </div>
                </>
              ) : (
                "No questions selected!"
              )}
            </div>
            <div className="display-tab">
              {questionOnDisplay.answers.map((answer) => (
                <>
                  <div
                    style={{ marginTop: "8px" }}
                  >{`Ans: ${answer.answer}`}</div>
                  <div>{`By: ${answer.answeredby}`}</div>
                </>
              ))}
            </div>
            <div className="input controls">
              <Link to="/" className="btn">
                Cancel
              </Link>
              <div className="text-field">
                <input
                  type="text"
                  onChange={(e) =>
                    setAnswer({
                      ...answer,
                      answer: e.target.value,
                      answeredby: name,
                    })
                  }
                  value={answer.answer}
                />
              </div>
              <button type="submit" className="btn">
                Add
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default AnsQuestion;
