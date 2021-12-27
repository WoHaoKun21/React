const Child = (props) => {
    console.log("Child props：",props);
    let {name,age,delTodo}=props;
    return (
        <div>
            <h3>Child组件</h3>
            <p>App组件传过来的数据：{name} {age} </p>
            <button onClick={delTodo}>传过来的事件</button>
        </div>
    );
}
export default Child;