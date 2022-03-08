import React, { Component } from "react";

export default class FilterObject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unFilteredArray: [
        { name: "Jimmy Joe", title: "Hack0r", age: 12 },
        { name: "Jeremy Schrader", age: 24, hairColor: "brown" },
        { name: "Carly Armstrong", title: "CEO" },
      ],
      userInput: "",
      filteredArray: [],
    };
  }
  handleChange = (e) => {
    this.setState({ userInput: e.target.value });
  };
  filterTerm = () => {
    let word = this.state.userInput;
    let unArr = this.state.unFilteredArray;
    let filteredArr = [];
    unArr.forEach((obj) =>
      obj.hasOwnProperty(word)
        ? filteredArr.push(obj)
        : console.log(`${word} not found`)
    );
    this.setState({ filteredArray: filteredArr });
  };
  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">
          Original:
          {JSON.stringify(this.state.unFilteredArray)}
        </span>
        <input className="inputLine" type="text" onChange={this.handleChange} />
        <button className="confirmationButton" onClick={this.filterTerm}>
          Filter by Property
        </button>
        <span className="resultsBox filterObjectRB">
          Filtered:
          {JSON.stringify(this.state.filteredArray)}
        </span>
      </div>
    );
  }
}
