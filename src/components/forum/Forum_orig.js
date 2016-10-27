import React from "react";
import Question from './Question';

export default class Forum_orig extends React.Component {
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
        <div className="panel panel-default">
          <div className="panel-body">A Basic Panel</div>
        </div>
        <button type="button" className="btn btn-primary btn-lg pohina-btn">Default</button>
      </div>
    );

    return (
      <h1>"Hello!"</h1>
    );

  }
}
