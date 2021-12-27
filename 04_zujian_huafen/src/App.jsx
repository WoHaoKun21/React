import React, { Component } from "react";
import "./css/index";
import Footer from "./Footer";
import Item from "./Item";
export default class App extends Component {
    state = {
        todoDatas: [], // 用来存储所有的todo数组数据
        todoNum: 0,
        view: "all",//过滤状态，all、Active、Completed
        flag: false // 全选或者全不选
    }
    // 一、 添加todo——自己创建的函数
    addTodo = (e) => {
        let { todoDatas, todoNum } = this.state;// 将数据进行解构
        // 生成一个新的todo
        if (e.keyCode !== 13) return;// 如果按键不是回车，则什么也不做——return表示调用结束
        if (e.target.value == "") return;// 如果输入框文本为空，不执行添加todo——并且终止运行
        // 生成一个新的 todo
        let todo = {};
        todo.id = new Date().getTime();
        todo.value = e.target.value.trim();// 获取文本框的内容，并且去掉文本框里面的空格
        todo.hasCompleted = false;
        todoDatas.push(todo);// 因为push是变异方法，所以不需要再创建一个新数组，直接push新的对象
        // 变成了todoDatas[{id:15685123,value:"文本框输入的内容",hasCompleted:false}]
        todoNum++;
        // 改变thi.state的值
        this.setState({ todoDatas, todoNum });
        // // 简写：
        // this.setState({todoDatas});
        e.target.value = "";
    }
    // 二、 删除指定的todo
    delTodo = (todo) => {
        let { todoDatas, todoNum } = this.state;
        todoDatas = todoDatas.filter(value => {
            if (todo.id === value.id) {
                if (!todo.hasCompleted) {// 默认是false状态，取反为true，会执行这条语句；如果是true的话，取反会变为false，不会执行这条语句
                    todoNum--;
                }
                return false;
            }// 如果id值相同
            return true;
        })
        this.setState({ todoDatas, todoNum });// 修改this.state的值
    }
    // 三、 改变todo状态
    changeHasCompleted = (todo) => {
        let { todoDatas, todoNum } = this.state;
        todoDatas = todoDatas.map(value => {
            if (todo.id === value.id) {
                value.hasCompleted = !todo.hasCompleted;
                if (value.hasCompleted) {// 返回的true为减
                    todoNum--;
                } else {// 否则为加
                    todoNum++;
                }
            }
            return value;
        });
        this.setState({ todoDatas, todoNum });
    }
    // 四、 编辑todo——子组件失去焦点改变父组件state
    editTodo = (todo) => {
        let { todoDatas } = this.state;
        todoDatas = todoDatas.map(value => {
            if (todo.id === value.id) {
                value.value = todo.value;
            }
            return value;
        });
        this.setState({ todoDatas });
    }
    // 五、过滤：all、Active、Completed
    filterTodo = (view) => {
        this.setState({ view });
    }
    // 六、清除完成项目——清除已完成todo
    clearCompleted = () => {
        let { todoDatas } = this.state;
        todoDatas = todoDatas.filter(value => {
            if (value.hasCompleted) {
                return false;
            }
            return true;
        });
        this.setState({ todoDatas });
    }
    // 七、全选或者全不选
    selectAll = () => {
        let { flag, todoDatas, todoNum } = this.state;
        flag = !flag;
        todoDatas = todoDatas.map(value => {
            if (flag) {
                value.hasCompleted = true;
            } else {
                value.hasCompleted = false
            }
            return value;// 没有返回值也会报错
        });
        if (flag) {
            todoNum = 0;
        } else {
            todoNum = todoDatas.length;
        }
        this.setState({ todoDatas, todoNum, flag });
    }

    // 挂载——————挂载
    render() {
        // 解构数据
        let { todoDatas, todoNum, view } = this.state;
        let { addTodo, delTodo, changeHasCompleted, editTodo, filterTodo, clearCompleted, selectAll } = this;
        let filterTodos = todoDatas.filter(todo => {
            switch (view) {
                case "all":
                    return true;
                case "active":// “hasCompleted”值为false，要取反，将未完成的保留
                    return !todo.hasCompleted;// return true
                case "completed":// “hasCompleted”的值为false，将已完成的消除
                    return todo.hasCompleted;// return false
            }
        });
        let items = filterTodos.map(todo => {
            return (
                <Item todo={todo} key={todo.id} delTodo={delTodo}
                    changeHasCompleted={changeHasCompleted}
                    editTodo={editTodo}
                />
            );
        })
        return (
            <div className="todoapp">
                <header className="header">
                    <h1>Todos</h1>
                    <input type="text" className="new-todo" placeholder="What needs to be done？" onKeyUp={addTodo} />
                </header>
                <section className="main">
                    <input type="checkbox" id="toggle-all" className="toggle-all"
                        onClick={selectAll}
                    />
                    <label htmlFor="toggle-all"></label>
                    <ul className="todo-list">
                        {
                            items
                        }
                    </ul>
                </section>
                <footer>
                    <Footer todoNum={todoNum} filterTodo={filterTodo} view={view} clearCompleted={clearCompleted} />
                </footer>
            </div>
        );
    }
}