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
    const evalNum = () => {
      let numberInput = this.state.userInput.split("");
      numberInput.map((num) =>
        num % 2 === 0
          ? this.state.evenArray.push(num)
          : this.state.oddArray.push(num)
      );
      this.setState({ userInput: " " });
      console.log(this.state.userInput);
      this.setState(this.state);
    };
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input
          type="text"
          className="inputLine"
          onChange={(e) => this.setState({ userInput: e.target.value })}
        />

        <button className="confirmationButton" onClick={evalNum}></button>
        <span className="resultsBox">{this.state.evenArray}</span>
        <span className="resultsBox">{this.state.oddArray}</span>
      </div>
    );
  }
}
