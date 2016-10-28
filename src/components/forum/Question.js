import React from "react";
import Answer from "./Answer";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

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
    const answer = this.props.answer;
    const questionId = this.props.questionId;
    const content = this.state.content;
    return (
      <MuiThemeProvider>
        
          <div className="q-and-a-wrapper">
            <div className="panel panel-default pohina-forum-panel-outmost pohina-question">
              <div className="panel-body collapsed" data-toggle="collapse" data-target={"#"+questionId}>
              <div id="textbox">
                <p className="pohina-alignleft">{question}</p>
                <div className="pohina-alignright">
                  <i className="ion-chevron-down"></i>
                </div>
              </div>
              </div>
            </div>
            <div className="pohina-forum-panel-outmost pohina-answer collapse" id={""+questionId}>
              <p dangerouslySetInnerHTML={{__html: answer}} />
            </div>
          </div>

      </MuiThemeProvider>
    );
  }
}
