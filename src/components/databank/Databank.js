import React from "react";

export default class DataBank extends React.Component {

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
              <a href="#">
              <i className="fa fa-dashboard fa-lg"></i>
              Kuinka tulla yrittäjäksi
              </a>
            </li>

            <li data-toggle="collapse" data-target="#service" className="collapsed">
              <a href="#">
              <i className="fa fa-globe fa-lg"></i>
              Yrityksen perustaminen
              <span className="arrow"></span>
              </a>
              </li>
            <ul className="sub-menu collapse" id="service">
              <li>New Service 1</li>
              <li>New Service 2</li>
              <li>New Service 3</li>
            </ul>

            <li data-toggle="collapse" data-target="#service" className="collapsed">
              <a href="#">
              <i className="fa fa-globe fa-lg"></i>
              Kirjanpidon tekeminen
              <span className="arrow"></span>
              </a>
              </li>
            <ul className="sub-menu collapse" id="service">
              <li>New Service 1</li>
              <li>New Service 2</li>
              <li>New Service 3</li>
            </ul>

            <li data-toggle="collapse" data-target="#service" className="collapsed">
              <a href="#">
              <i className="fa fa-globe fa-lg"></i>
              Verojen maksaminen
              <span className="arrow"></span>
              </a>
              </li>
            <ul className="sub-menu collapse" id="service">
              <li>New Service 1</li>
              <li>New Service 2</li>
              <li>New Service 3</li>
            </ul>

            <li data-toggle="collapse" data-target="#service" className="collapsed">
              <a href="#">
              <i className="fa fa-globe fa-lg"></i>
              Henkilöstön palkkaaminen
              <span className="arrow"></span>
              </a>
              </li>
            <ul className="sub-menu collapse" id="service">
              <li>New Service 1</li>
              <li>New Service 2</li>
              <li>New Service 3</li>
            </ul>

            <li data-toggle="collapse" data-target="#service" className="collapsed">
              <a href="#">
              <i className="fa fa-globe fa-lg"></i>
              Yrityksen kasvattaminen
              <span className="arrow"></span>
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
              <h1>Hei olen tietoa</h1>
              <p className="lead">Kuinka tulla rikkaaksi</p>
            </div>
            <div className="col-lg-4 col-md-5 col-sm-6">
              <div className="sponsor">
              </div>
            </div>
          </div>

          <div className="row">
            <div className="">
              <h2>Example body text</h2>
              <p>Nullam quis risus eget <a href="#">urna mollis ornare</a> vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>
              <p><small>This line of text is meant to be treated as fine print.</small></p>
              <p>The following snippet of text is <strong>rendered as bold text</strong>.</p>
              <p>The following snippet of text is <em>rendered as italicized text</em>.</p>
              <p>An abbreviation of the word attribute is <abbr title="attribute">attr</abbr>.</p>
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
