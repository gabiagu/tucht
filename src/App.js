import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Input from './Input';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>6 things</h2>
                </div>

                <div className="App-content">
                    <Input type="primary" placeholder="the most important thing" />
                    <Input type="secondary" placeholder="something important" />
                    <Input type="secondary" placeholder="something important" />
                    <Input type="tertiary" placeholder="some small thing" />
                    <Input type="tertiary" placeholder="some small thing" />
                    <Input type="tertiary" placeholder="some small thing" />
                </div>
            </div>
        );
    }
}

export default App;
