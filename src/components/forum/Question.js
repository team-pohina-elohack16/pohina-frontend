import React from "react";
import Answer from "./Answer";

export default class Forum extends React.Component {
  render() {
    const question = this.props.question.question;
    const answers = this.props.question.answers;
    return (
      <div className="panel panel-default pohina-forum-panel-outmost">
        <h3 className="center" >{question}</h3>
        <ul>
          {
            answers.map((item) => (
              <Answer key={item.answer} answer={item.answer} vote={item.vote} />
            ))
          }
        </ul>
      </div>
    );
  }
}
