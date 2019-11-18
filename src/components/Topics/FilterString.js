import React, { Component } from 'react';

export default class FilterString extends Component {
    constructor(){
        super();

        this.state = {
            unFilteredArray: [
                'hello there',
                'the end',
                'cool'
            ],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange(val){
        this.setState({
            userInput: val
        });
    }

    filterArray(){
        this.setState({
            filteredArray: this.state.unFilteredArray.filter(str => str.includes(this.state.userInput))
        });
    }

    render(){
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Strings: { JSON.stringify(this.state.unFilteredArray, null, 10) }</span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
                <button className="confirmationButton" onClick={ () => this.filterArray(this.state.userInput) }>Filter</button>
                <span className="resultsBox filterStringRB">Filtered: { JSON.stringify(this.state.filteredArray, null, 10) }</span>
            </div>
        )
    }
}