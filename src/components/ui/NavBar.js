import React from "react";
import { browserHistory, Link } from "react-router";

export default class NavBar extends React.Component {

  renderNav() {
    return (
      <div className="navbar navbar-inverse navbar-fixed-top pohina-pad" id="navbar">
        <div className="pohina-navbar">
          <div className="navbar-header">
            <Link to="/">
              <img className="pohina-navbar-logo" src="img/elo_logo.png" />
            </Link>
            <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-main">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div className="navbar-collapse collapse" id="navbar-main">
            <ul className="nav navbar-nav">
              <li>
                <Link to="/chart">Kaavio</Link>
              </li>
              <li>
                <Link to="/forum">Keskustelu</Link>
              </li>
              <li>
                <Link to="/databank">Tietopankki</Link>
              </li>
              <li>
                <Link to="/mycompany">Yritykseni</Link>
              </li>
            </ul>

            <ul className="nav navbar-nav navbar-right">
              <li><a href="https://google.com/" target="_blank">Kirjaudu sisään</a></li>
            </ul>

          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div id="nav">
        { this.renderNav() }
      </div>
    );
  }
}
