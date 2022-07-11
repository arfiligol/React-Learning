import React, { Component } from "react";

class NavBar extends Component {
    state = {};

    render() {
        console.log("NavBar - Rendered");

        return (
            <nav className="navbar navbar-light bg-light">
                <a href="https://www.youtube.com" className="navbar-brand">
                    Navbar{" "}
                    <span className="badge badge-pill badge-secondary">
                        {this.props.totalCounters}
                    </span>
                </a>
            </nav>
        );
    }
}

export default NavBar;
