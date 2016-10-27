import React from "react";
import Question from './Question';

export default class Forum extends React.Component {

    // constructor() {
    //   super();
    //   this.resizeSidebar = this.resizeSidebar.bind(this);
    // }
    //
    // componentDidMount() {
    //   window.addEventListener("resize", this.resizeSidebar);
    //   window.addEventListener("scroll", this.resizeSidebar);
    // }
    //
    // componentWillUnmount() {
    //   window.removeEventListener("resize", this.resizeSidebar);
    //   window.removeEventListener("scroll", this.resizeSidebar);
    // }
    //
    // resizeSidebar() {
    //   var navbar = document.getElementById("navbar");
    //   var menu = element.find(".fixed-pos")[0];
    //   var top = navbar.clientHeight - document.scrollTop();
    //   if (top < 0) {
    //     menu.style.top = 0;
    //   } else {
    //     menu.style.top = top + 3 + "px";
    //   }
    // }

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

              <li data-toggle="collapse" data-target="#service" className="collapsed">
                <a href="#" className="pohina-link">
                Kirjanpidon tekeminen
                <span className="pohina-icon ion-ios-arrow-down"></span>
                </a>
                </li>
              <ul className="sub-menu collapse" id="service">
                <li>New Service 1</li>
                <li>New Service 2</li>
                <li>New Service 3</li>
              </ul>

              <li data-toggle="collapse" data-target="#service" className="collapsed">
                <a href="#" className="pohina-link">
                Verojen maksaminen
                <span className="pohina-icon ion-ios-arrow-down"></span>
                </a>
                </li>
              <ul className="sub-menu collapse" id="service">
                <li>New Service 1</li>
                <li>New Service 2</li>
                <li>New Service 3</li>
              </ul>

              <li data-toggle="collapse" data-target="#service" className="collapsed">
                <a href="#" className="pohina-link">
                Henkilöstön palkkaaminen
                <span className="pohina-icon ion-ios-arrow-down"></span>
                </a>
                </li>
              <ul className="sub-menu collapse" id="service">
                <li>New Service 1</li>
                <li>New Service 2</li>
                <li>New Service 3</li>
              </ul>

              <li data-toggle="collapse" data-target="#service" className="collapsed">
                <a href="#" className="pohina-link">
                Yrityksen kasvattaminen
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
      // return (
      //   <div className="pohina-sidebar-wrapper">
      //     <div className="pohina-sidebar">
      //       <div className="row">
      //         <div className="col-lg-3 col-md-3 col-sm-4">
      //           <div className="list-group table-of-contents">
      //             <a className="list-group-item" href="#navbar">Have rich parents</a>
      //             <a className="list-group-item" href="#buttons">Inherit</a>
      //             <a className="list-group-item" href="#typography">Profit</a>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // )
    }

    renderContent() {
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

            <div className="panel panel-default pohina-forum-panel-outmost">
              <div className="panel-body">
              <div id="textbox">
                <p className="pohina-alignleft">Suosituksia tilitoimistoista?</p>
                <div className="pohina-alignright">
                  <i className="ion-chevron-down"></i>
                </div>
              </div>
              </div>
            </div>

            <div className="panel panel-default pohina-forum-panel-outmost">
              <div className="panel-body">
              <div id="textbox">
                <p className="pohina-alignleft">Mistä edulliset nettisivut yrityselle?</p>
                <div className="pohina-alignright">
                  <i className="ion-chevron-down"></i>
                </div>
              </div>
              </div>
            </div>

            <div className="panel panel-default pohina-forum-panel-outmost">
              <div className="panel-body">
              <div id="textbox">
                <p className="pohina-alignleft">Tarvitsee alv maksaa kuukausittain?</p>
                  <div className="pohina-alignright">
                    <i className="ion-chevron-down"></i>
                  </div>
              </div>
              </div>
            </div>

            <div className="panel panel-default pohina-forum-panel-outmost">
              <div className="panel-body">
              <div id="textbox">
                <p className="pohina-alignleft">Milloin starttirahaa haetaan?</p>
                <div className="pohina-alignright">
                  <i className="ion-chevron-down"></i>
                </div>
              </div>
              </div>
            </div>

            <div className="panel panel-default pohina-forum-panel-outmost">
              <div className="panel-body">
              <div id="textbox">
                <p className="pohina-alignleft">Ensimmäisen työntekijän palkkaaminen?</p>
                <div className="pohina-alignright">
                  <i className="ion-chevron-down"></i>
                </div>
              </div>
              </div>
            </div>


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
