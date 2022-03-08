import React, { Component } from "react";

export default class Sum extends Component {
  constructor() {
    super();
    this.state = {
      number1: 0,
      number2: 0,
      sum: null,
    };
  }
  handleNum1 = (e) => {
    this.setState({ number1: e.target.value });
  };
  handleNum2 = (e) => {
    this.setState({ number2: e.target.value });
  };
  sum = () => {
    this.setState({
      sum: Number(this.state.number1) + Number(this.state.number2),
    });
  };
  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input className="inputLine" type="number" onChange={this.handleNum1} />
        <input className="inputLine" type="number" onChange={this.handleNum2} />
        <button className="confirmationButton" onClick={this.sum}></button>
        <span className="resultsBox">Sum: {this.state.sum}</span>
      </div>
    );
  }
}
