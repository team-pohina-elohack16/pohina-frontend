import React from "react";
import { Link } from "react-router";

export default class FrontPage extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="page-header" id="banner">
          <div className="row">
            <div className="col-lg-8 col-md-7 col-sm-6">
              <h1>Yeti</h1>
              <p className="lead">A friendly foundation</p>
            </div>
            <div className="col-lg-4 col-md-5 col-sm-6">
              <div className="sponsor">
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-4">
              <div className="list-group table-of-contents">
                <a className="list-group-item" href="#navbar">Navbar</a>
                <a className="list-group-item" href="#buttons">Buttons</a>
                <a className="list-group-item" href="#typography">Typography</a>
                <a className="list-group-item" href="#tables">Tables</a>
                <a className="list-group-item" href="#forms">Forms</a>
                <a className="list-group-item" href="#navs">Navs</a>
                <a className="list-group-item" href="#indicators">Indicators</a>
                <a className="list-group-item" href="#progress-bars">Progress bars</a>
                <a className="list-group-item" href="#containers">Containers</a>
                <a className="list-group-item" href="#dialogs">Dialogs</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
