import React, { Component } from 'react';

export default class EvenAndOdd extends Component {
    constructor(){
        super();

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ""
        }
    }

    handleChange(val) {
        this.setState({
            userInput: val
        });
    }

    assignEvenAndOdds(userInput){
        const numArray = userInput.split(',');
        numArray.forEach((val, index, arr) => {
            arr[index] = +val.replace(/\s/g, '');
        })
        
        this.setState({
            evenArray: numArray.filter((val) => val % 2 === 0).join(', '),
            oddArray: numArray.filter((val) => val % 2 === 1).join(', ')
        })
    }

    render(){
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) } ></input>
                <button className="confirmationButton" onClick={ () => { this.assignEvenAndOdds(this.state.userInput) }}>Split</button>
                <span className="resultsBox">Evens: [{ this.state.evenArray }]</span>
                <span className="resultsBox">Odds: [{ this.state.oddArray }]</span>
            </div>
        )
    }
}