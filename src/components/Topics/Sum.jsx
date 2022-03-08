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
  render() {
    const handleNum1 = (e) => {
      this.setState({ number1: e.target.value });
    };
    const handleNum2 = (e) => {
      this.setState({ number2: e.target.value });
    };
    const sum = () => {
      this.setState({
        sum: Number(this.state.number1) + Number(this.state.number2),
      });
    };
    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input className="inputLine" type="number" onChange={handleNum1} />
        <input className="inputLine" type="number" onChange={handleNum2} />
        <button className="confirmationButton" onClick={sum}></button>
        <span className="resultsBox">Sum: {this.state.sum}</span>
      </div>
    );
  }
}
