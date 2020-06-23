import React from 'react';
import './login.scss'
import { Form, Input, Button, Checkbox } from 'antd'
import store from "../../redux/store";
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};



class Login extends React.Component {
    constructor(props, context){
        super(props, context);
        this.state={
            name:''
        }
    }
    componentWillMount(){
        //组件加载时只调用，以后组件更新不调用，整个生命周期只调用一次，此时可以修改state
        // this.props.history.push({ pathname: '/index/myInput', state: { name: 'sunny' } })

    }

    handleClick(){
        console.log('Success:');
        console.log( this.props);
       store.dispatch({type:'SET_VISIBILITY_FILTER',filter:this.state.name})
        console.log(store);
        this.props.history.push({ pathname: '/index', state: { name: 'sunny' } })
    }
    
    onFinish = values => {
        console.log('Success:', values);

    };

     onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    changeInputValue = (value)=>{
        this.setState({
            name:value.target.value
        })
        
    }
    render() {
        return (
            <div className="login-wrapper">
                <div className="form-wrapper">
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input value={this.state.name} onChange={this.changeInputValue} />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button  onClick={() => this.handleClick()} type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}
export default Login;
