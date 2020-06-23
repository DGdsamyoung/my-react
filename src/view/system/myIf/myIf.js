import React from 'react';

//定义基础组件
function Orange() {
    return <h1>我喜欢橘子</h1>
}

function Apple() {
    return <h1>我喜欢苹果</h1>
}
//进行选择
function GetFavor(props) {
    const favor = props.fruit;
    if (favor === 'orange') {
        return <Orange />
    } else {
        return <Apple />
    }
}


class MyIf extends React.Component {
    constructor() {
        super();
        this.state = {
            flag: false,
            fruit: 'orange',
            array: [
                {
                    id: 1,
                    name: 'kobe'
                },
                {
                    id: 2,
                    name: 'james'
                },
                {
                    id: 3,
                    name: '3'
                },
                {
                    id: 4,
                    name: '4'
                }
            ]
        }
    }
    Rander = () => {
        if(this.state.flag){
            return <div>正</div>

        }else{
            return <div>假</div>

        }
    }
    toggle=()=>{
        let f = !this.state.flag
        this.setState({flag:f})
    }

    render() {
        return (
            <div>
                <div> if 判断渲染</div>
                <div>要渲染的内容</div>
                <GetFavor fruit={this.state.fruit} />
                {this.state.flag ? (
                    <div onClick={this.Rander}>
                        123</div>
                ) : (
                        <div onClick={this.Rander}>
                            flag: {this.state.flag} 渲染出来 </div>
                    )}
                    <this.Rander></this.Rander>
                    <button onClick={this.toggle}>切换</button>
        
                <div>
                    for循环遍历
                    {
                        this.state.array.map((item, index) => {
                            if (item.id === 3) {
                                return <div key={index}>￥￥ {item.id} 特别的id </div>
                            } else {
                                return <div onClick={this.Rander} key={index}>id:{item.id},name:{item.name}</div>
                            }
                        })
                    }
                </div>


            </div>
        );
    }
}
export default MyIf
