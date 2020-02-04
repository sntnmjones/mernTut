import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apiResponse: "",
            dbResponse: ""
        };

    }

    /* Fetches data from API and stores response on apiResponse. */
    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }

    callDB() {
        fetch("http://localhost:9000/testDB")
            .then(res => res.text())
            .then(res => this.setState({ dbResponse: res }))
            .catch(err => err);
    }


    componentDidMount() {
        this.callAPI();
        this.callDB();
    }

    render() {
        return (
            <div className="App">
                <p className='App-intro'>{this.state.apiResponse}</p>
                <p className="App-intro">{this.state.dbResponse}</p>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
            </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
            </a>
                </header>

            </div>

        );
    }
}

export default App;
