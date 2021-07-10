import React from "react";
import Header from './../Header/Header';
import SearchBox from "../SearchBox/SearchBox";
import './App.css';
import ResultsContainer from "../ResultsContainer/ResultsContainer";

const name  = require('@rstacruz/startup-name-generator');

class App extends React.Component
{
    constructor() {
        super();

        this.state = {
            headerText: 'Name It!',
            headerExpanded: true,
            suggestedNames: [],
        };
    }

    // Method For child-parent Communication
    handleInputChange = (InputText) => {
        this.setState({ headerExpanded: !InputText, suggestedNames: InputText ? name(InputText) : []});
    };

    render ()
    {
        return (
            <div>
                <Header headerExpanded= {this.state.headerExpanded} headTitle = {this.state.headerText}/>
                <SearchBox onInputChange = {this.handleInputChange}/>
                <ResultsContainer suggestedNames={this.state.suggestedNames}/>
            </div>
        );
    }
}



export default App;