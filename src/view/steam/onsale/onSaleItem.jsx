import React from 'react';
import './onsale.scss'
import '../style/base.scss'
class OnSaleItem extends React.Component{
    constructor(props) {
        super(props)
        console.log(this.props)
    }
    render(){
        return(
            <div className="OnSaleItem-wrapper">
                <div className="OnSale-detail">
                    <div className="OnSale-img"><img src={this.props.info.src}></img></div>
                    <div className="OnSale-content">
                        <div className="OnSale-title">12345</div>
        <div className="OnSale-developers default-dec">开发商: <span className="default-content">{this.props.info.developers}</span></div>
                        <div className="OnSale-publisher default-dec">发行商: <span className="default-content">{this.props.info.publisher}</span></div>
                        <div className="OnSale-evaluate default-dec">全部测评: <span></span></div>
                     
                    </div>
                    <div className="add-shop-cart">
                    <button className="default-buttom">
                        <span className="buttom-text">添加至购物车</span></button>
                    </div>
                </div>
                <img src={this.props.info.src}></img>
            </div>
        )
    }
}
export default OnSaleItem