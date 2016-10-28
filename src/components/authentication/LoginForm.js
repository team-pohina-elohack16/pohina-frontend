import React from "react";
import Success from "./Success";
import ChooseLoginType from "./ChooseLoginType";

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1
    };
  }
  nextStep() {
    this.setState({
      step : this.state.step + 1
    })
  }
  previousStep() {
    this.setState({
      step : this.state.step - 1
    })
  }
  getStep() {
    switch (this.state.step) {
      case 1:
        return <ChooseLoginType nextStep={this.nextStep} />
      case 2:
        return <Success />
    }
  }
  render() {
    return (
      <div className="pohina-besides-sidebar">
        {this.getStep()}
      </div>
    );
  }
}
