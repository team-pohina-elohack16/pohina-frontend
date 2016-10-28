import React from "react";
import Question from '../forum/Question';

export default class MyCompany extends React.Component {
    renderSideNavbar() {
      return (
        <div className="nav-side-menu fixed-pos">
          <i className="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>

          <div className="menu-list">
            <ul id="menu-content" className="menu-content collapse out">
              <li>
                <a href="#" className="pohina-link">
                Kuinka tulla yrittäjäksi
                </a>
              </li>

              <li data-toggle="collapse" data-target="#service" className="collapsed">
                <a href="#" className="pohina-link">
                Yrityksen perustaminen
                <span className="pohina-icon ion-ios-arrow-down"></span>
                </a>
                </li>
              <ul className="sub-menu collapse" id="service">
                <li>New Service 1</li>
                <li>New Service 2</li>
                <li>New Service 3</li>
              </ul>

            </ul>
          </div>
          <div className="brand">
            <img className="pohina-sidebar-logo" src="img/elo_logo.png" />
          </div>
        </div>
      )
    }

    renderContent() {
      const questions = [
        "Kysymyksiä ja vastauksia yrittäjyydestä",
        "Suosituksia tilitoimistoista?",
        "Mistä edulliset nettisivut yrityselle?",
        "Tarvitsee alv maksaa kuukausittain?",
        "Milloin starttirahaa haetaan?",
        "Ensimmäisen työntekijän palkkaaminen?"
      ];
      return (
        <div className="pohina-besides-sidebar">
          <div className="page-header" id="banner">
            <div className="row">
              <div className="">
                <h1>Q&A</h1>
                <p className="lead">Kysymyksiä ja vastauksia yrittäjyydestä</p>
              </div>
              <div className="col-lg-4 col-md-5 col-sm-6">
                <div className="sponsor">
                </div>
              </div>
            </div>
            {
              questions.map((q) => (
                <Question question={q} key={q} />
              ))
            }
          </div>
        </div>
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
