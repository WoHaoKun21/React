import React, { Component } from "react";
export default class Footer extends Component {
    render() {
        let {todoNum}= this.props;
        return (
            <footer className="footer">
                <span className="todo-count">
                    <strong> {todoNum} </strong>
                    <span>item left</span>
                </span>
                <ul className="filters">
                    <li>
                        <a href="#/all">All</a>
                    </li>
                    <li>
                        <a href="#/active">Active</a>
                    </li>
                    <li>
                        <a href="#/complete">Complete</a>
                    </li>
                </ul>
                <button className="clear-completed">Clear completed</button>
            </footer>
        );
    }
}