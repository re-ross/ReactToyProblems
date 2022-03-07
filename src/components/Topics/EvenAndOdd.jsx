import React, { Component } from "react";

export default class EvenAndOdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: "",
    };
  }
  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input
          className="inputLine"
          onChange={(e) => this.setState({ userInput: e.target.value })}
        />
        <h2>{this.state.userInput}</h2>
        <button className="confirmationButton"></button>
        <span className="resultsBox"></span>
        <span className="resultsBox"></span>
      </div>
    );
  }
}
