import React, { Component } from "react";

export default class FilterString extends Component {
  constructor() {
    super();
    this.state = {
      names: [
        "James",
        "Jessica",
        "Melody",
        "Tyler",
        "Blake",
        "Jennifer",
        "Mark",
        "Maddy",
      ],
      userInput: "",
      filteredArray: [],
    };
  }
  handleChange = (e) => {
    this.setState({ userInput: e.target.value });
  };
  filterStr = (userInput) => {
    let namesArr = this.state.names;
    let filteredArr = [];

    namesArr.forEach((el) => {
      el.includes(userInput)
        ? filteredArr.push(el)
        : console.log(`${userInput} not found`);
    });
    this.setState({ filteredArray: filteredArr });
  };
  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">{JSON.stringify(this.state.names)}</span>
        <input className="inputLine" type="text" onChange={this.handleChange} />
        <button
          className="confirmationButton"
          onClick={() => this.filterStr(this.state.userInput)}
        >
          Filter by String
        </button>
        <span className="resultsBox filterStringRB">
          {JSON.stringify(this.state.filteredArray)}
        </span>
      </div>
    );
  }
}
