import React from "react";
import { Link } from "react-router";

export default class FrontPage extends React.Component {

  render() {
    return (
      <div className="welcome">
        <img src="https://images.unsplash.com/photo-1415045550139-59b6fafc832f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=24b01c30ad6fcf4b33aae390d57ffe2b" />
        <h1>Welcome home,<br/>entrepreneur.</h1>
      </div>
    );
  }
}
