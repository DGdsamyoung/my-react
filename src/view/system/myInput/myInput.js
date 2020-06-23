import React from 'react';
import { Input, Button } from 'antd';
import './myInput.scss'

// document.onclick = function() { 
//     var menu = document.getElementById("r_menu");
// 	menu.style.display = "none";
//  }
 let draw=function(count){
    //具体抽奖逻辑，跟次数的校验是分开的
    //输出剩余次数
    console.log(`剩余${count}次`)
}
　　 //利用Generator控制次数
 let residue=function*(count){
    while(count>0){
        count--
        yield draw(count)
    }
}
let star=residue(5)
class MyInput extends React.Component {
    constructor(props, context){
        super(props, context);
        this.state = {
            name:'1',
            number:'2'
        }
    }
    componentWillMount(){
        //组件加载时只调用，以后组件更新不调用，整个生命周期只调用一次，此时可以修改state
        console.log(this.state.name)
    }
    componentWillUpdate(){ // 在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。
        console.log('更新dom之前')
    }
    componentDidUpdate (){ //在组件完成更新后立即调用。在初始化时不会被调用。
            console.log('更新dom')
    }
    test(){
        console.log(this.props.location.state.name)
    }
    changeInputValue= (value) => {
        console.log(value.target.value,1)
        this.setState({
            name:value.target.value
        })
    }
    rightClick = (e)=>{
        var menu = document.getElementById("r_menu");

        e.preventDefault()
        menu.style.display = "block";
        //让自定义菜单随鼠标的箭头位置移动
        menu.style.left = e.clientX + "px";
        menu.style.top = e.clientY + "px";
        // alert('右键了')
    }
    drow = () =>{

        star.next()
    }
    render() {
        return (
            <div>
                <Input placeholder="Basic usage" value={this.state.name} onChange={this.changeInputValue}/>
                <Button onClick={this.drow}>抽奖</Button>
                <div onContextMenu={this.rightClick}>右键事件 </div>

<div id="r_menu" className="vpopmenu">
    <div id="menu_create" onClick="createMenu();">新增</div>
    <div id="menu_copy" onClick="copyMenu();">页内复制</div>
	<div id="menu_copy" onClick="delMenu();">删除</div>
</div>
            </div>
        )
    }
}
export default (MyInput) ;
