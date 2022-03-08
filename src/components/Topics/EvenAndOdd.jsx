import React, { Component } from "react";
export default class EvenAndOdd extends Component {
  constructor() {
    super();
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: "",
    };
  }
  render() {
    const handleChange = (e) => {
      this.setState({ userInput: e.target.value });
    };
    const evalNum = () => {
      let numberInput = this.state.userInput.split("");
      numberInput.map((num) =>
        num % 2 === 0
          ? this.state.evenArray.push(num)
          : this.state.oddArray.push(num)
      );
      this.setState({ userInput: " " });
      this.setState(this.state);
    };
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Even and Odd</h4>
        <input type="text" className="inputLine" onChange={handleChange} />

        <button className="confirmationButton" onClick={evalNum}>
          Split Numbers
        </button>
        <span className="resultsBox">Evens: {this.state.evenArray}</span>
        <span className="resultsBox">Odds: {this.state.oddArray}</span>
      </div>
    );
  }
}
