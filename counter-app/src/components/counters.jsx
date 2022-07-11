import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
    render() {
        console.log("Counters - Rendered");
        const { onReset, onDelete, onIncrement } = this.props;

        return (
            <div>
                <button
                    onClick={onReset}
                    className="btn btn-primary btn-sm m-2"
                >
                    Reset
                </button>
                {this.props.counters.map((counter) => {
                    return (
                        <Counter
                            key={counter.id}
                            counter={counter} // value, id whatever that is in counter could be get in counter.jsx with "this.props.counter.id" or "this.props.counter.value"... "this.props.counter.whatever"
                            onDelete={onDelete}
                            onIncrement={onIncrement}
                        ></Counter>
                    );
                })}
            </div>
        );
    }
}

export default Counters;
