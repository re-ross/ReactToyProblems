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
  render() {
    const handleChange = (e) => {
      this.setState({ userInput: e.target.value });
    };
    const filterStr = () => {
      let names = this.state.names;
      let filterWord = this.state.userInput;
      names.forEach((el) => {
        el.includes(filterWord)
          ? this.state.filteredArray.push(el)
          : console.log(`${filterWord} not found`);
      });
      return this.setState(this.state);
    };
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">{JSON.stringify(this.state.names)}</span>
        <input className="inputLine" type="text" onChange={handleChange} />
        <button className="confirmationButton" onClick={filterStr}>
          Filter?
        </button>
        <span className="resultsBox filterStringRB">
          {JSON.stringify(this.state.filteredArray)}
        </span>
      </div>
    );
  }
}
