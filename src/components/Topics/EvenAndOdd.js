import React, {Component} from "react";

class EvenAndOdd extends Component {
    constructor() {
        super();

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ""
        }
    }
        handleChange(val) {
            this.setState({userInput: val});
        }
        assignEvenAndOdds(userInput) {
            var arr = userInput.split("")
            var evens = [];
            var odds = [];

            for(var i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                evens.push(parseInt(arr[i], 10));
            } else {
                odds.push(parseInt(arr[i], 10));
            }
        }
        this.setState({evenArray: evens, oddArray: odds});
    }
    render() {
        return (
            <div className="puzzleBoxEvenAndOddPB">
                <h1>Evens and Odds</h1>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={ () => {this.assignEvenAndOdds(this.state.userInput)}}> Divide </button>
                <span className="resultsBox"> Evens: {(this.state.evenArray)}</span>
                <span className="resultsBox"> Odds: {(this.state.oddArray)}</span>
            </div>
        )
    }
}

export default EvenAndOdd;