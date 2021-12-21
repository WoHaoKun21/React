import React, { Component } from "react";
export default class Footer extends Component {
    render() {
        let { todoNum, filterTodo, view, clearCompleted } = this.props;
        return (
            <footer className="footer">
                <span className="todo-count">
                    <strong> {todoNum} </strong>
                    <span>{todoNum < 2 ? "item" : "items"} left</span>
                </span>
                <ul className="filters">
                    <li><a href="#/all" className={view == "all" ? "selected" : ""} onClick={e => filterTodo("all")}>All</a></li>
                    <li><a href="#/active" className={view == "active" ? "selected" : ""} onClick={e => filterTodo("active")}>Active</a></li>
                    <li><a href="#/complete" className={view == "completed" ? "selected" : ""} onClick={e => filterTodo("completed")}>Complete</a></li>
                </ul>
                <button className="clear-completed"
                    onClick={clearCompleted}
                >Clear completed</button>
            </footer>
        );
    }
}