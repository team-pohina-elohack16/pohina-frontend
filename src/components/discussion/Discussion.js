import React from "react";
// import { Paper } from "material-ui";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

export default class Discussion extends React.Component {

  renderContent() {
    const style = {
      display: 'inline-block',
    };
    return (
      <div>
        <Paper className="pohina-paper" style={style} zDepth={3} >
          <div className="pohina-paper-inner">
            <div className="pohina-paper-content">
              <h4 className="pohina-paper-content-header">Onko järkevää lähteä yrittäjäksi jos on...</h4>
              <p>
                Olen ollut töissä jossain ja osaan jotakin, minusta olisi
                mukava tehdä jotakin.
              </p>
            </div>
            <div className="pohina-paper-icon">
              <span className="pohina-icon ion-ios-arrow-down"></span>
            </div>
          </div>
        </Paper>
        <Paper style={style} zDepth={2} />
        <Paper style={style} zDepth={3} />
        <Paper style={style} zDepth={4} />
        <Paper style={style} zDepth={5} />
      </div>
    )
  }

  render() {
    return (
      <MuiThemeProvider>
      <div>
        <h1>Keskustelua aiheesta</h1>
        { this.renderContent() }
      </div>
      </MuiThemeProvider>
    );
  }
}
