import React from "react";

export default class Answer extends React.Component {
  render() {
    const answer = this.props.answer;
    const vote = this.props.vote;
    return (
      <div className="forum-question">
        <div className="forum-question-left-component">
          <div className="center arrow-up"></div>
          <p>&nbsp;&nbsp;&nbsp;<b>{vote}</b></p>
          <div className="center arrow-down"></div>
        </div>
        <div className="forum-question-right-component">
          {answer}
        </div>
      </div>
    );
  }
}
