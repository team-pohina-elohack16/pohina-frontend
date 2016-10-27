import React from "react";
import Question from './Question';

export default class Forum extends React.Component {
  render() {
    var questions = [];

    const question1 = {
      question: "How to hire someone?",
      answers: [
        "Pay some money",
        "And be a nice boss/co-worker"
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
