import React from 'react'

export default class ChooseLoginType extends React.Component {

  render(){
    return (
      <div>
        <div onClick={this.props.nextStep()}>
          <p>Rekisteröitynyt käyttäjä</p>
        </div>
        <div onClick={this.props.nextStep()}>
          <p>Vierailija</p>
        </div>
      </div>
    );
  }
}
