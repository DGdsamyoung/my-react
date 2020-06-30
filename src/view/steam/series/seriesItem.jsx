import React from 'react';
import './series.scss'
import '../style/base.scss'
class SeriesItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className="seriesItem-wrapper">
                <div className="img-wrapper">
                    <img className="img"   src={this.props.info.src} alt=""/>
                </div>
                <div className="content-text">
                    <img className="content-img" src={require('../img/series/lego.png')} alt=""/>
                </div>
                <div className="discount-tag discount">
                    最多立省{this.props.info.discount}
                </div>
                <div className="showMore-wrapper">

                </div>
            </div>
        )
    }
}
export {SeriesItem}