import React from 'react';
import { getNotice } from '../../../api/test.js'
import {Table} from 'antd';
class MyAxios extends  React.Component{
    constructor(){
        super()
        this.state={
            NoticeList:[],
            columns: [
                {
                    title: 'id',
                    dataIndex: 'id',
                    key: 'id',
                },
                {
                    title: '标题',
                    dataIndex: 'title',
                    key: 'title',
                },
                {
                    title: '开始时间',
                    dataIndex: 'startDate',
                    key: 'startDate',
                },
                {
                    title: '创建人',
                    dataIndex: 'createName',
                    key: 'createName',
                },
                {
                    title: '创建时间',
                    dataIndex: 'createDate',
                    key: 'createDate',
                }
            ],
        }
    }
    componentWillMount() {
        //组件加载时只调用，以后组件更新不调用，整个生命周期只调用一次，此时可以修改state
        this.getNoticeList()
       
    }
    getNoticeList(){
        getNotice().then((x)=>{
            this.setState({
                NoticeList:x.data.data.result
            })
        console.log(this.state.NoticeList)

        })
    }
    render(){
        return(
            <div>
            <div>axios</div>
            <div>
            <Table dataSource={this.state.NoticeList} columns={this.state.columns}  rowKey={(record, index) => index}/>;
            </div>
            </div>
        )
    }
} 
export default  MyAxios;