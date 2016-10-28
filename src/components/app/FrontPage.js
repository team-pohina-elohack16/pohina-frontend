import React from "react";
import { Link } from "react-router";

export default class FrontPage extends React.Component {

  render() {
    return (
      <div className="pohina-welcome-container-wrapper">
        <div className="pohina-welcome-container">
          <h1 className="pohina-welcome-container-header">
            Tervetuloa yrittäjän kotisivulle.
          </h1>
          <span className="pohina-welcome-icon ion-arrow-down-c"></span>
        </div>
        <div className="pohina-welcome-card-nomargin">
          <img className="pohina-welcome-logo" src="img/elo_logo.png" />
          <h1 className="pohina-welcome-header">Entrepreneur hub</h1>
          <p className="pohina-welcome-paragraph">
            Paras paikka etsiä ja löytää tietoa yrittäjyydestä.
          </p>
          <span className="dividing-header"></span>
          <div className="pohina-feature-container">
            <div className="row">
              <div className="col-md-6">
                <div className="feature">
                  <h3 className="feature__title">Kohdennettu sisältö</h3>
                  <p className="feature__description">
                    Elo Entrepreneur Hub tarjoaa tavan löytää juuri yrityksesi tilanteeseen sopivaa tietoa.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="feature">
                  <h3 className="feature__title">Avoimen datan haku</h3>
                  <p className="feature__description">
                    Hubin kautta löydät kaikkea dataa suomalaisista yrityksistä avoimen
                    datan lähteistä.
                  </p>
                </div>
              </div>
            </div>
            <div className="medium-12 large-6 columns">
              <div className="row">
                <div className="col-md-6">
                  <div className="feature">
                    <h3 className="feature__title">Kysy ja jaa tietoa yrittäjyydestä</h3>
                    <p className="feature__description">
                      Onko sinulla vaikea kysymys johon etsit vastausta? Hubin kautta voit
                      kysyä muilta yrittäjiltä ja jakaa omaa tietämystäsi.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="feature">
                    <h3 className="feature__title">Löydä uusia tapoja yrittämiseen</h3>
                    <p className="feature__description">
                      Palvelumme avulla voit löytää uusia vinkkejä ja apuvälineitä parantaaksesi
                      yritystäsi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
