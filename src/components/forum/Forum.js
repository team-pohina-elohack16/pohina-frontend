import React from "react";
import Question from './Question';
import SearchInput, {createFilter} from 'react-search-input'

export default class Forum extends React.Component {

    constructor(props) {
      super(props);
      this.state = { searchTerm: '' };
      this.searchUpdated = this.searchUpdated.bind(this)
    }

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
    }

    renderContent() {
      const questionsAndAnswers = [
        { q: "Suosituksia tilitoimistoista?", a: "--" },
        { q: "Mistä edulliset nettisivut yritykselle?", a: "tee näin" },
        { q: "Tarvitsee alv maksaa kuukausittain?", a: "jia boi" },
        { q: "Ensimmäisen työntekijän palkkaaminen?", a:
        `Työvoimatoimisto voi myöntää työnantajalle palkkatukea työttömän henkilön palkkauskustannuksiin, jos työnhakija ei työllisty avoimille työmarkkinoille tai jos hän ei sijoitu koulutukseen.
        <br><br>
        <a>Ohjemistotyöntekijöitä te-toimiston cv-netissä</a>` },
      ];

      const questionsAndAnswers2 = [
        { q: "Milloin starttirahaa haetaan?", a:
          `---
          ` },
        { q: "Suositukset vuokratyöyrityksistä Helsingissä??", a:
          `---
          ` },
      ];

      const propertiesToFilter = ['q', 'a'];
      var questionId = 0;

      return (
        <div className="pohina-besides-sidebar">
          <div className="page-header" id="banner">
            <div className="row">
              <div className="">
                <button className="ask-button panel panel-default pohina-forum-panel-outmost">
                  Kysy yrittäjyydestä!
                </button>
                <h1>Q&A</h1>
                <p className="lead">Kysymyksiä ja vastauksia yrittäjyydestä</p>
                <SearchInput className="search-input" onChange={this.searchUpdated} placeholder="Hae&hellip;"/>
              </div>
              <div className="col-lg-4 col-md-5 col-sm-6">
                <div className="sponsor">
                </div>
              </div>
            </div>

            <p className="lead">Sinulle suositellut</p>
            {
              questionsAndAnswers.filter(createFilter(this.state.searchTerm, propertiesToFilter)).map((q) => (
                <Question question={q.q}  answer={q.a} key={q.q} questionId={questionId++} />
              ))
            }
            <br/>

            <p className="lead">Uusimmat</p>
            {
              questionsAndAnswers2.filter(createFilter(this.state.searchTerm, propertiesToFilter)).map((q) => (
                <Question question={q.q}  answer={q.a} key={q.q} questionId={questionId++} />
              ))
            }
            <br/>
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

    searchUpdated(term) {
      this.setState({searchTerm: term});
    }
}
