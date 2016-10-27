import React from "react";
import { Link } from "react-router";

import NavBar from "../ui/NavBar";

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      on: true
    };
  }

  toggle(e) {
    this.setState({on: !this.state.on});
  }

  render() {
    return (
      <div>
        <NavBar />
        <main className="main-container">
          {this.props.children}
        </main>
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node,
};
