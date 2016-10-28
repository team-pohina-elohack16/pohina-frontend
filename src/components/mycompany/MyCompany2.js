import React from "react";
import Question from '../forum/Question';
import BasicInfo from '../mycompany/BasicInfo';
import EconomyCharts from '../mycompany/EconomyCharts';

export default class MyCompany extends React.Component {
    renderSideNavbar() {
      return (
        <div className="nav-side-menu fixed-pos">
          <i className="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>

          <div className="menu-list">
            <ul id="menu-content" className="menu-content collapse out">

              <li>
                <a href="#" className="pohina-link">
                Perustiedot
                </a>
              </li>

              <li>
                <a href="#" className="pohina-link">
                Talouden seuranta
                </a>
              </li>

              <li>
                <a href="#" className="pohina-link">
                Markkinoiden seuranta
                </a>
              </li>



            </ul>
          </div>
          <div className="brand">
            <img className="pohina-sidebar-logo" src="img/elo_logo.png" />
          </div>
        </div>
      )
    }

    renderContent() {
      return (
        <EconomyCharts></EconomyCharts>
      )
    }
    render() {
      return (
        <div>
          { this.renderSideNavbar() }
          { this.renderContent() }
        </div>
      );
    }
}
