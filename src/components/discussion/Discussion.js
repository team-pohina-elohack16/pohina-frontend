import React from "react";

export default class Discussion extends React.Component {

  renderContent() {
    return (
      <div>
      </div>
    )
  }

  render() {
    return (
      <div>
        <h1>Discussion about the topic</h1>
        { this.renderContent() }
      </div>
    );
  }
}
