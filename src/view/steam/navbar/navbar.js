import React from 'react';
import './navbar.scss'
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
        submMenu: [
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
        submMenu: []
    },
    {
        text: '服务',
        submMenu: []
    }
]
 
var arr = [{
    key: '01',
    value: 'abc'
 }, {
    key: '02',
    value: 'edf'
 }, {
    key: '03',
    value: 'ccg'
 },{
    key: '04',
    value: 'ttt'
 },{
    key: '01',
    value: 'abc'
 }];


 //  利用对象访问属性的方法，判断对象中是否存在key
 var result = [];
 var obj = {};
 for(var i =0; i<arr.length; i++){
    if(!obj[arr[i].key]){
       result.push(arr[i]);
       obj[arr[i].key] = true;
    }
 }
 console.log(result); 
 console.log(obj)

 const s = new Set();

['2','3','5','4','5',2,2].forEach(x => s.add(x));
// Set结构不会添加重复的值

for(let i of s) {
  console.log(i);
}
console.log(Array.from(s));
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

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Navbar