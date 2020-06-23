import React from 'react';
import { Input } from 'antd';
import ChildrenComp from "./system/myTable/childrenComp";
class App2 extends React.Component {
    constructor(props, context){
        super(props, context);
        this.state = {
            name:'1',
            number:'2'
        }
    }
    componentWillMount(){
        //组件加载时只调用，以后组件更新不调用，整个生命周期只调用一次，此时可以修改state
        console.log(this.props)
    }
    onRef = (ref) => {
        this.child = ref
    }
    bindRef=(ref)=>{
        this.ChildrenComp = ref
    }
    click = (e) => {
        this.child.test()
    }
    useChildren(e){
        this.ChildrenComp.test()
    }
    changeInputValue= (value) => {
        console.log(value.target.value,1)
        this.setState({
            name:value.target.value
        })
    }
    render() {
        return (
            <div>
                <Input placeholder="Basic usage" value={this.state.name} onChange={this.changeInputValue}/>
                <button onClick={this.click}>调用子组件</button>
                <ChildrenComp  onRefd={this.onRef}></ChildrenComp>
                <button onClick={this.click} >click</button>
            </div>
        )
    }
}


export default (App2) ;
