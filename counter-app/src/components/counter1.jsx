import React, { Component } from "react";

class Counter extends Component {
    constructor() {
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
    }

    // "state" is a special property, which include almost every data we need in this component.
    state = {
        count: 0,
        imageUrl: "https://picsum.photos/200",
        tags: ["tag1", "tag2", "tag3"],
    };

    style = {
        fontSize: "10px",
        fontWeight: "bold",
    };

    handleIncrement() {
        this.setState({ count: this.state.count + 1 }, () => {
            // Here is a callback function
            console.log("Increment Clicked.", this.state.count);
        });
    }
    // Other choice then constructor is arrow function
    // handleIncrement = () => {
    //     this.state.count += 1;
    //     console.log('Increment Clicked.', this.state.count);
    // }

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags!</p>;

        return (
            <ul>
                {this.state.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                ))}
            </ul>
        );
    }

    render() {
        console.log("props", this.props);

        return (
            <div>
                <img src={this.state.imageUrl} alt="" />
                <span className={this.getBadgeClasses()}>
                    {this.formatCount()}
                </span>
                <button
                    onMouseOver={this.handleIncrement}
                    onClick={this.handleIncrement}
                    className="btn btn-secondary btn-sm"
                >
                    Increment
                </button>

                {this.state.tags.length === 0 && "Please create a new tag!"}
                {this.renderTags()}

                <ul>
                    {this.state.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                    ))}
                </ul>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}

export default Counter;
