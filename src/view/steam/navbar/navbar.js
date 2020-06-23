import React from 'react';
import './navbar.scss'
import Item from 'antd/lib/list/Item';
import {
    SearchOutlined
  } from '@ant-design/icons';
const menu = [
    {
        text: '您的商店',
    },
    {
        text: '游戏',
    },
    {
        text: '软件',
    },
    {
        text: '硬件',
    },
    {
        text: '新闻',
    },
    {
        text: 'xxx实验室',
    },
]
class Navbar extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="navbar">
                <div className="navbar-menu">
                    <div className="navbar-menu-area">
                        <div className="navbar-menu-list">
                        <div className="navbar-wrapper">
                            {
                               
                                menu.map((item, index) => {
                                    return (
                                        <div key={index} className="menu-item">
                                            <span>{item.text}</span>
                                        </div>
                                    )
                                })
                                
                            }
                            </div>
                            <div className="search-wrapper">
                                <div className="search-content">
                                    <input className="search-input" placeholder="搜索商店" />
                                    <SearchOutlined />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Navbar