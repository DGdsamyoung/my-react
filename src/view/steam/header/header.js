import React from 'react';
import './header.scss'
const menu = [
    {
        text: '商店',
        submMenu: [
            {
                text: '精选'
            },
            {
                text: '愿望单'
            },
            {
                text: '新闻'
            },
            {
                text: '统计'
            }
        ]
    },
    {
        text: '社区',
        submMenu:[
            {
                text: '主页'
            },
            {
                text: '讨论'
            },
            {
                text: '创意工坊'
            },
            {
                text: '市场'
            },
            {
                text: '实况直播'
            }
        ]
    },
    {
        text: '关于',
        submMenu:[]
    },
    {
        text: '服务',
        submMenu:[]
    }
]
class Header extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="wrapper-header">
                <div className="content-header">
                    <img src={[require("../img/globalheader_logo.png")]} alt="" />
                    <div className="header-menuList">
                        {
                            menu.map((item, index) => {
                                if (item.submMenu.length > 0) {
                                    return (
                                        <div key={index} className="menu-item-header">{item.text}
                                        <div className="menu-item-list">
                                    {
                                        item.submMenu.map((item2, index2) => {
                                            return    <div key={index2} className="menu-item">{item2.text}</div>
                                        })
                                    }
                                    </div>
                                    </div>
                                )
                        } else {
                                return <div className="menu-item-header" key={index}>{item.text}</div>
                            }

                        })
                    }
                    </div>
                </div>
            </div>
        )
    }
}
export default Header;
