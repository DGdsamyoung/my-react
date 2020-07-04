import React from 'react';
import './onsale.scss'
import Item from './onSaleItem'
const info = {
    src:'http://img4.imgtn.bdimg.com/it/u=2840337784,759594984&fm=26&gp=0.jpg',
    src1:'http://img1.imgtn.bdimg.com/it/u=3506059711,1760541670&fm=26&gp=0.jpg',
    developers:'育碧',
    publisher:'腾讯',
    evaluate:'一般般'
}
class OnSale extends React.Component{
    constructor(props) {
        super(props)
    }
    render(){
        return(
            <div className="onSale-wrapper">
                <Item  info={info}></Item>
                <Item  info={info}></Item>
                <Item  info={info}></Item>
            </div>
        )
    }
}
export default OnSale