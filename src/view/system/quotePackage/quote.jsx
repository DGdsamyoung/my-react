import React from 'react';
import { Row, Col, Input } from 'antd';

const textStyle = {
    textAlign:'right'
}
class MyTable extends React.Component {
    constructor(props, context) {
        super(props, context);
        var user = {
            name:'zhang',
            age:'18'
        }
        document.cookie="user=" + JSON.stringify(user) // 保存对象的时候需要转JSON,当字符串保存
        document.cookie="name=123"
        var list = document.cookie
        console.log(list)
        // this.fun=this.fun.bind(this);
        this.state = {

        }

    }


    render() {
        return (
            <div>
                <Row gutter={16}>
                    <Col className="gutter-row" span={8}>
                        <Row gutter={5}>
                            <Col style={textStyle} span={8}>单据编号：</Col>
                            <Col span={16}> <Input size='small' placeholder='输入单号查询'></Input></Col>
                        </Row>
                    </Col>
                    <Col className="gutter-row" span={8}>
                    <Row gutter={5}>
                            <Col tyle={textStyle} span={8}>单据编号：</Col>
                            <Col span={16}> <Input size='small' placeholder='输入单号查询'></Input></Col>
                        </Row>
                    </Col>
                    <Col className="gutter-row" span={8}>
                    <Row gutter={5}>
                            <Col tyle={textStyle} span={8}>单据编号：</Col>
                            <Col span={16}> <Input size='small' placeholder='输入单号查询'></Input></Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default MyTable;
