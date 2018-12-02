import React, { Component } from 'react';

class FilterObject extends Component {

constructor() {
    super();

    this.state = {
      employees: [
        {
            name: "Daniel Bullington",
            title: "Web Developer",
            age: 34
        },
        {
            name: "Carter Cothren",
            title: "Sales",
            age: 30
        },
      ],

      userInput: "",
      filteredEmployees: []
    }
  }

  handleChange(val) {
    this.setState({userInput: val});
  }

  filterEmployees(prop) {
    var employees = this.state.employees;
    var filteredEmployees = [];
    
    for (var i = 0; i < employees.length; i++) {
      if (employees[i].hasOwnProperty(prop)) {
        filteredEmployees.push(employees[i]);
      }
    }

    this.setState({filteredEmployees: filteredEmployees });
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h1> Filter Object </h1>
        <span className="puzzleText"> Original: {JSON.stringify(this.state.employees, null, 10)}</span>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
        <button className="confirmationButton" onClick={ () => this.filterEmployees(this.state.userInput)}>Filter</button>
        <span className="resultsBox filterObjectRB"> Filtered: {JSON.stringify(this.state.filteredEmployees, null, 10)}</span>
      </div>
    )
  }
}

export default FilterObject;