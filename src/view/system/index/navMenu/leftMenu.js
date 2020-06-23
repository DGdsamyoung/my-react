import React from 'react';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
const styleDiv = {
    left:'0',
    top: '50px',
    position:'fixed',
    height:'calc(100% - 50px)'
}
const menuStyle ={
    height: '100%',
    width: '250px'
}
const { SubMenu } = Menu;
class LeftMenu extends React.Component {
    constructor(props) {
        super(props);
        this.rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
        this.state = {
            openKeys: ['sub1'],
        };
        console.log(this.props)
    }
    onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    };
    skip=({ item, key, keyPath, domEvent })=>{
        console.log(key)
        this.props.history.push({ pathname: '/index/'+ key})
    }
    render() {
        return (
            <div style={styleDiv}>
                <Menu
                    onClick={this.skip}
                    mode="inline"
                    openKeys={this.state.openKeys}
                    onOpenChange={this.onOpenChange}
                    style={menuStyle}
                >
                    <SubMenu
                        key="sub1"
                        title={
                            <span>
              <MailOutlined />
              <span>Navigation One</span>
            </span>
                        }
                    >
                        <Menu.Item key="myInput">myInput</Menu.Item>
                        <Menu.Item key="myTable">myTable</Menu.Item>
                        <Menu.Item key="myIf">myIf</Menu.Item>
                        <Menu.Item key="myModal">myModal</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
                        <Menu.Item key="myAxios">myAxios</Menu.Item>
                        <Menu.Item store={this.props.store} key="myRedux">myRedux</Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="myQuote">myQuote</Menu.Item>
                            <Menu.Item key="8">Option 8</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                    <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                        <Menu.Item key="11">Option 11</Menu.Item>
                        <Menu.Item key="12">Option 12</Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}
export default LeftMenu
