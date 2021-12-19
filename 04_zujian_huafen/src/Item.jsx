import React, { Component } from "react";
export default class Item extends Component {
    // 添加属于自己的this.state
    state = {
        inEdit: false, // 是否进入编辑状态
        flag: true //是否可以执行onBlur处理函数里面的代码
    }
    // 双击进入编辑状态
    handdleEidt = () => {// 双击进入编辑状态
        let { todo } = this.props;
        this.setState({
            inEdit: true
        }, () => {
            this.refs.myInput.value = todo.value;
            this.refs.myInput.focus();// 模拟用户将鼠标点进文本框
        });
    }

    render() {
        let { handdleEidt } = this;
        let { inEdit, flag } = this.state;
        let { todo, delTodo, changeHasCompleted, editTodo } = this.props;
        let completed = todo.hasCompleted ? "completed" : "";
        let editing = inEdit ? completed + " editing" : completed;
        return (
            <li className={editing}>
                <div className="view">
                    <input type="checkbox" className="toggle" onChange={() => changeHasCompleted(todo)} />
                    <label onDoubleClick={handdleEidt}>{todo.value}</label>
                    <button className="destroy" onClick={() => delTodo(todo)}></button>
                </div>
                <input type="text" className="edit" ref="myInput"
                    onBlur={e => {
                        if (flag == true) {
                            todo.value = e.target.value.trim();
                            editTodo(todo);
                            this.setState({
                                inEdit: false
                            })
                        }
                    }}
                    onKeyUp={e => {
                        if (e.keyCode === 13) {
                            todo.value = e.target.value.trim();
                            editTodo(todo);
                            this.setState({
                                inEdit: false
                            })
                        }
                        if (e.keyCode === 27) {
                            editTodo(todo);
                            this.setState({
                                inEdit: false,
                                flag:false
                            });
                            setTimeout(()=>{
                                this.setState({flag:true});
                            },10)
                        }
                    }}
                />
            </li>
        );
    }
}