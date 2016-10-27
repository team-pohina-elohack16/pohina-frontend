import React from "react";
import Question from './Question';

export default class Forum extends React.Component {
  render() {
    var questions = [];

    const question1 = {
      question: "How to hire someone?",
      answers: [
        {
          answer: "Pay some money",
          vote: 19
        },
        {
          answer: "And be a nice boss/co-worker",
          vote: 18
        }
      ]
    };

    questions.push(question1);
    return (
      <div className="pohina-container-m-top">
        <h2>Questions:</h2>
        {questions.map((item) => (
          <Question question={item} key={item.question} />
        ))}
      </div>
    );
  }
}
