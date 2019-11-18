import React, { Component } from 'react';

export default class FilterObject extends Component {
    constructor() {
        super();

        this.state = {
            unFilteredArray: [
                {
                    name: 'Jim',
                    hair: 'brown'
                },
                {
                    name: 'Joe',
                    eyes: 'green'
                },
                {
                    name: 'Tom',
                    height : 73
                }
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

    filterArray(userInput) {
        this.setState({
            filteredArray: this.state.unFilteredArray.filter(val => val.hasOwnProperty(userInput))
        })
    }

    render(){
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">{ JSON.stringify(this.state.unFilteredArray, null, 10) }</span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
                <button className="confirmationButton" onClick={ () => this.filterArray(this.state.userInput) }>Filter</button>
                <span className="resultsBox filterObjectRB">{ JSON.stringify(this.state.filteredArray, null, 10) }</span>
            </div>
        )
    }
}