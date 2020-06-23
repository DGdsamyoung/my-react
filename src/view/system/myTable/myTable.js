import React from 'react';
import {Table} from 'antd';
import ChildrenComp from './childrenComp'
import { getNotice } from '../../../api/test.js'


class MyTable extends React.Component {
    constructor(props, context) {
        super(props, context);

        // this.fun=this.fun.bind(this);
        this.state = {
            name: '父数据',
            number: '2',
            columns: [
                {
                    title: '姓名',
                    dataIndex: 'name',
                    key: 'name',
                },
                {
                    title: '年龄',
                    dataIndex: 'age',
                    key: 'age',
                },
                {
                    title: '住址',
                    dataIndex: 'address',
                    key: 'address',
                },
            ],
            dataSource : [
                {
                    key: '1',
                    name: '胡彦斌',
                    age: 32,
                    address: '西湖区湖底公园1号',
                },
                {
                    key: '2',
                    name: '胡彦祖',
                    age: 42,
                    address: '西湖区湖底公园1号',
                },
        ]
        }
    }

    componentWillMount() {
        //组件加载时只调用，以后组件更新不调用，整个生命周期只调用一次，此时可以修改state
        getNotice().then((x)=>{
            console.log(x)
        })
    }

    test() {
        console.log(this.props.location.state.name)
    }

    onRef = (ref) => {
        this.abc = ref
    }
    useChildren = () => {
        this.abc.test()
        console.log(this.abc)
        this.setState({
            name:'修改数据了'
        })
    }

    fun() {
        console.log('你调用了父组件的方法')
    }

    addData=()=> {
        let array =[...this.state.dataSource]
        array.push({

            key: '4',
                name: '胡彦斌',
            age: 44,
            address: '西湖区湖底公园1号',

        })
        this.setState({
                dataSource: array
            }
        )
        console.log(this.state.dataSource)
    }

    render() {
        return (
            <div>
                <Table dataSource={this.state.dataSource} columns={this.state.columns}/>;
                <button onClick={this.useChildren}>调用子组件</button>
                <ChildrenComp name={this.state.name} getFun={this.fun} onRefd={this.onRef}></ChildrenComp>
                <button onClick={this.addData}>父组件添加数据</button>
            </div>
        )
    }
}

export default MyTable;
