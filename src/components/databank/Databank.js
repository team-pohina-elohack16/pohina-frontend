import React from "react";

import Discussion from "components/discussion/discussion";

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
    return (
      <div className="page-header" id="banner">
        <div className="row">
          <div className="">
            <h1>Kuinka tulla yrittäjäksi</h1>
            <p className="lead">Helpot ohjeet aloittelevalle yrittäjälle</p>
          </div>
          <div className="col-lg-4 col-md-5 col-sm-6">
            <div className="sponsor">
            </div>
          </div>
        </div>

        <div className="row">
          <div className="">
            <h2>Yrityksen perustaminen</h2>
            <p>
              Eikö olisikin mahtavaa olla yrittäjä? Oman onnensa seppä. Työpaikkojen luoja.
              Suomen talouden tuki. Yrittäjäksi ryhtyminen vaatii paljon motivaatiota ja
              omistautumista halukkaalta/xxx mutta kaikkien vaikeuksien jälkeenkin se on
              palkitseva tapa elättää itsensä. Tämän oppaan tarkoituksena on olla helppona
              tutustumisena yrittäjyyteen ja sen tuomiin haasteisiin.
            </p>

            <h3>Liikeidean validointi</h3>
            <p>
              Tämä on ehkä se tärkein kysymys yrittäjyksi haluaville; onko tälle palvelulle
              tai tuotteelle kysyntää? Vaikka se saattaa tuntua itsestään selvältä ei kannata
              unohtaa oman tuotteen jatkuvaa arviointia ja asiakkaiden xxx.
            </p>

            <h3>Yritysmuodon valinta</h3>
            <p>
              Jos ideasi vaikuttaa hyvältä ja tunnet asiakkaita, jotka ovat jo kertoneet
              halustaan ostaa sinulta tuotteitasi niin eihän siinä muu auta kuin ryhtyä
              yrittämään! Ensimmäisenä tulee miettiä minkä yritysmuodon yrityksellesi valitset:
            </p>

            <h4>Toiminimi</h4>
            <p>
              Ajattelitko hoitaa tekemiesi taulujen ja putkitöiden myymisen ilman suurempaa
              häslinkiä? Tuleeko liikevaihtosi olemaan alle 10 000€ vuodessa? Etkö tarvitse
              sen suurempia investointeja päästäksesi alkuun? Toiminimi on helppo tapa aloittaa
              yrittäminen ja se tarjoaa tavan myydä ja veloittaa helposti ja vaivattomasti.
            </p>

            <h4>Kommandiittiyhtiö</h4>
            <p>
              Maksaako kalja liikaa etkä halua osakkeita? Öh ah.
            </p>

            <h4>Osakeyhtiö</h4>
            <p>
              Onko sinulle suunnitelmissa kasvattaa yritystäsi nopeasti ja tarvitko investointeja
              päästäksesi alkuun? ÖÖ ää. Tarvitset 2000€ ja talosi pantiksi.
            </p>

            <h4>Joku???</h4>
            <p></p>

            <h3>Perustamisilmoituksen lähettäminen</h3>
            <p>
              Meepä tänne ja ilmoita että haluat yrittäjäksi.
              kaupparekisteriin, arvonlisäverovelvolliseksi, ennakkoperintärekisteriin ja työnantajarekisteriin
            </p>

            <h3>Starttirahan hakeminen</h3>
            <p>
              Uusille yrittäjille usein tarjotaan starttirahaa, jota kandeis hakee.
            </p>

            <h3>Ota itsellesi vakuutus</h3>
            <p>
              Ilman vakuutusta keikut hivenen kuin kallion reunalla ilman riippuliidintä.
              Älä ole tyhmä, osta vakuutusta Elolta jo nyt!
            </p>

            <h3>Valitse itsellesi kirjanpitäjä</h3>
            <p>
              Kirjanpito on tarkkaa ja työlästä hommaa, jossa ei sovi tehdä virheitä.
              Siksi usein aloittavat yrittäjät hakeutuvat käyttämään ulkoisia palveluita
              jotka hoitavat sen heidän puolestaan. Lue *Kirjanpito* opas jossa kerromme
              lisää mitä kirjanpito pitää sisällään ja mitä yrittäjän tulisi siitä vähintäänkin
              tietää. Tavallisesti vuosittainen kirjanpito maksaa pienyrittäjälle xxx vuodessa.
              Tämän *linkin* kautta voit etsiä itsellesi sopivaa kirjanpitäjää.
            </p>

            <h3>Kun tulee ongelmia</h3>
            <p>
              Tule takaisin tänne ja löydä itsellesi tarkoitus.
            </p>

            <h3>Jotain jotain</h3>
            <p>
              Näillä ohjeilla sinun tulisi jo päästä hyvälle alulle yrittämiseen.
              Toivotamme sinulle paljon onnea ja intoa yrittämiseen. Elo tukee täysillä
              suomalaista yrittämistä ja haluamme sinunkin siinä onnistuvan parhaalla mahdollisella
              tavalla!
            </p>

            <h3></h3>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        { this.renderSideNavbar() }
        <div className="pohina-besides-sidebar">
          { this.renderContent() }
    <div>
        <p>text</p>
        <a href="#">link</a>
    </div>
          <Discussion />
        </div>
      </div>
    );
  }
}
