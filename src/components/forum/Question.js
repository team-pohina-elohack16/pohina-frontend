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
    const content = this.state.content;
    return (
      <MuiThemeProvider>
        
          <div className="q-and-a-wrapper">
            <div className="panel panel-default pohina-forum-panel-outmost pohina-question">
              <div className="panel-body collapsed" data-toggle="collapse" data-target="#answer1">
              <div id="textbox">
                <p className="pohina-alignleft">{question}</p>
                <div className="pohina-alignright">
                  <i className="ion-chevron-down"></i>
                </div>
              </div>
              </div>
            </div>
            <div className="pohina-forum-panel-outmost pohina-answer collapse" id="answer1">
              <p>answer here</p>
            </div>
          </div>

      </MuiThemeProvider>
    );
  }
}
