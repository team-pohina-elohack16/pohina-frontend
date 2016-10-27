import React from "react";

export default class Forum extends React.Component {
  render() {
    const question = this.props.question.question;
    const answers = this.props.question.answers;
    return (
      <div className="forum-question">
        <h3>{question}</h3>
        <ul>
          {
            answers.map((item) => (
              <li key={item}>{item}</li>
            ))
          }
        </ul>
      </div>
    );
  }
}
