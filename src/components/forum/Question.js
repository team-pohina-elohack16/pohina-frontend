import React from "react";
import Answer from "./Answer";

export default class Forum extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      content: ''
    }
  }
  showContent() {
    this.setState({content: "Heippa!"});
  }
  render() {
    const question = this.props.question;
    const content = this.state.content;
    return (
      <div className="panel panel-default pohina-forum-panel-outmost">
        <div className="panel-body">
        <div id="textbox">
          <p className="pohina-alignleft">{question}</p>
          <div className="pohina-alignright">
            <i className="ion-chevron-down"></i>
          </div>
        </div>
        </div>
      </div>
    );
  }
}
