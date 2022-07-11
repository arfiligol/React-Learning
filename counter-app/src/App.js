import React, { Component } from "react";
import NavBar from "./components/func_navbar";
import "./App.css";
import Counters from "./components/counters";
class App extends Component {
    constructor() {
        super();
        console.log("App - Constructor");
    }

    componentDidMount() {
        console.log("App - Mounted");
    }

    state = {
        counters: [
            { id: 0, value: 0 },
            { id: 1, value: 1 },
            { id: 2, value: 2 },
            { id: 3, value: 3 },
        ],
    };

    handleIncrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState({ counters });
    };

    handleReset = () => {
        const counters = this.state.counters.map((counter) => {
            counter.value = 0;
            return counter;
        });

        this.setState({ counters });
    };

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(
            (counter) => counter.id !== counterId
        );
        this.setState({ counters });
    };

    render() {
        console.log("App - Rendered");

        return (
            <React.Fragment>
                <NavBar
                    totalCounters={
                        this.state.counters.filter(
                            (counter) => counter.value > 0
                        ).length
                    }
                />
                <main className="container">
                    <Counters
                        counters={this.state.counters}
                        onReset={this.handleReset}
                        onIncrement={this.handleIncrement}
                        onDelete={this.handleDelete}
                    />
                </main>
            </React.Fragment>
        );
    }
}

export default App;
