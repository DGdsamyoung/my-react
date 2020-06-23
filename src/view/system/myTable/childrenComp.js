import React from 'react';

class ChildrenComp extends React.Component {
    constructor(props){
        super(props);
        console.log(this.props,'')
        this.state={
            childData:'---子组件数据---'
        }
    }
    componentWillMount(){
        //组件加载时只调用，以后组件更新不调用，整个生命周期只调用一次，此时可以修改state
    }
    componentDidMount(){
        this.props.onRefd(this)
    }
    test(){
        alert('子组件')
    }

    render() {
        return (
            <div>
                子组件---子组件数据{this.state.childData} ---子组件父数据{this.props.name}
                <button onClick={()=>{console.log('你点击了按钮 获取父数据'+this.props.name);this.props.getFun()}}>点击</button>

            </div>
        )
    }
}
export default ChildrenComp;
