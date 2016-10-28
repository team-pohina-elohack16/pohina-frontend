import React from "react";

export default class BasicInfo extends React.Component {
  render() {

    return (
      <div className="pohina-besides-sidebar">
        <div className="page-header" id="banner">
          <div className="row">
            <div className="">
              <h1>Oman yrityksen tiedot</h1>
              <p className="lead">CodeCompany Oy</p>

              <p>1234576-9</p>
              <p>Pitkäsaarenkatu 2</p>
              <p>00100 Helsinki</p>
            </div>
            <div className="col-lg-4 col-md-5 col-sm-6">
              <div className="sponsor">
              </div>
            </div>
          </div>

        </div>
      </div>
    )


  }
}
