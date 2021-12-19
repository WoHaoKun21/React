import React, { Component } from "react";
import "./css/index";
import Footer from "./Footer";
import Item from "./Item";
export default class App extends Component {
    state = {
        todoDatas: [], // 用来存储所有的todo数组数据
        todoNum: 0
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
                if (!todo.hasCompleted) {
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
                if(value.hasCompleted){// 返回的true为减
                    todonum--;
                }else{// 否则为加
                    todonum++;
                }
            }
            return value;
        });
        this.setState({ todoDatas, todoNum });
    }
    // 四、 编辑todo——子组件失去焦点改变父组件state
    editTodo = (todo) => {
        let { todoDatas, todoNum } = this.state;
        todoDatas = todoDatas.map(value => {
            if (todo.id === value.id) {
                value.value = todo.value;
            }
            return value;
        });
        this.setState({ todoDatas });
    }

    // 挂载——————挂载
    render() {
        // 解构数据
        let { todoDatas,todoNum } = this.state;
        let { addTodo, delTodo, changeHasCompleted, editTodo } = this;
        let items = todoDatas.map(todo => {
            return (<Item todo={todo} key={todo.id} delTodo={delTodo}
                changeHasCompleted={changeHasCompleted}
                editTodo={editTodo}
            />);
        })
        return (
            <div className="todoapp">
                <header className="header">
                    <h1>Todos</h1>
                    <input type="text" className="new-todo" placeholder="What needs to be done!" onKeyUp={addTodo} />
                </header>
                <section className="main">
                    <input type="checkbox" id="toggle-all" className="toggle-all" />
                    <label htmlFor="toggle-all"></label>
                    <ul className="todo-list">
                        {
                            items
                        }
                    </ul>
                </section>
                <footer>
                    <Footer todoNum={todoNum}/>
                </footer>
            </div>
        );
    }
}