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
        {this.state.on &&
          <div className="welcome">
            <img src="https://images.unsplash.com/photo-1415045550139-59b6fafc832f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=24b01c30ad6fcf4b33aae390d57ffe2b" />
            <h1>Welcome home,<br/>entrepreneur.</h1>
          </div>
        }
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
