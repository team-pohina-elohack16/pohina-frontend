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
        <div className="question-style">
          <Paper zDepth={3}>
            <br/>
              {question}
            <br/>
          </Paper>
        </div>
      </MuiThemeProvider>
    );
  }
}
