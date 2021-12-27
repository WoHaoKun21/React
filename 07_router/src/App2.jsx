import Child from "./Child";

const App2 = () => {
    let obj = {name:"tom",age:21,delTodo:function(){console.log("删除成功")}};
    return (
        <div>
            <h3>App2组件</h3>
            <hr />
            <Child {...obj} name="迪迦" />{/* 如果延展里面的参数和自己赋值的冲突了，后面的会覆盖前面的，所以，延展参数尽量放在前面 */}
        </div>
    );
}
export default App2;