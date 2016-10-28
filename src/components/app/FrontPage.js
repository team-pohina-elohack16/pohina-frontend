import React from "react";
import { Link } from "react-router";

export default class FrontPage extends React.Component {

  render() {
    return (
      <div className="pohina-welcome-container-wrapper">
        <img className="pohina-welcome-background" src="https://images.unsplash.com/photo-1415045550139-59b6fafc832f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=24b01c30ad6fcf4b33aae390d57ffe2b" />
        <div className="pohina-welcome-container">
          <h1 className="pohina-welcome-container-header">
            Tervetuloa yrittäjän kotisivulle.
          </h1>
          <span className="pohina-welcome-icon ion-arrow-down-c"></span>
        </div>
        <div className="pohina-welcome-card">
          <h1>Elo entrepreneur hub</h1>
          <p>
            Paras paikka etsiä ja löytää tietoa yrittäjyydestä.
          </p>
          <ul>
            <li>
              Adaptoituva haku.
            </li>
            <li>
              Vertaa yritystäsi muihin samanalan yrityksiin.
            </li>
            <li>
              Kysy ja jaa tietoa yrittäjyydestä.
            </li>
            <li>
              Löydä uusia tapoja parantaa yritystäsi.
            </li>
          </ul>
        </div>
        <div className="pohina-welcome-card-inverse">
          <h1>Löydä sinulle sopivat palvelut</h1>
          <p>
            Elo entrepreneur hub tarjoaa luotettavia yhteistyökumppaneita
            sinunkin yrityksellesi.
          </p>
        </div>
      </div>
    );
  }
}
