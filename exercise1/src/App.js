import React, { Component } from "react";
import "./App.css";
import Movies from "./component/movies";

class App extends Component {
    state = {};
    render() {
        return (
            <main className="container">
                <Movies></Movies>
                <Movies></Movies>
                <Movies></Movies>
                <Movies></Movies>
                <Movies></Movies>
            </main>
        );
    }
}

export default App;
