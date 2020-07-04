import React from 'react';
import './series.scss'
import '../style/base.scss'

class SeriesItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="seriesItem-wrapper">
                <div className="img-wrapper">
                    <img className="img" src={this.props.info.src} alt="" />
                </div>
                <div className="content-text">
                    <img className="content-img" src={require('../img/series/lego.png')} alt="" />
                </div>
                <div className="discount-tag discount">
                    最多立省{this.props.info.discount}
                </div>
                <div className="showMore-wrapper">
                    <div className="franchise-game-single">
                        {/* 第一个显示界面 */}
                        <div className="single-img-wrapper">
                            <img className="main-img" src={require('../img/series/csgo.jpg')} alt="" />
                            <div className="other-discount">
                                <div className="more-discount">-{this.props.info.more.discount}</div>
                                <div className="discount-bg">
                                    <span className="more-orginal-value">${this.props.info.more.originalValue}</span>
                                    <span className="more-discount-value">${this.props.info.more.discountValue}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="franchise-game-double">
                        <div className="double-img-wrapper">
                            <img className="main-img" src={require('../img/series/csgo.jpg')} alt="" />
                            <div className="other-discount">
                                <div className="more-discount">-{this.props.info.more.discount}</div>
                                <div className="discount-bg">
                                    <span className="more-orginal-value">${this.props.info.more.originalValue}</span>
                                    <span className="more-discount-value">${this.props.info.more.discountValue}</span>
                                </div>
                            </div>
                        </div>
                        <div className="double-img-wrapper">
                            <img className="main-img" src={require('../img/series/csgo.jpg')} alt="" />
                            <div className="other-discount">
                                <div className="more-discount">-{this.props.info.more.discount}</div>
                                <div className="discount-bg">
                                    <span className="more-orginal-value">${this.props.info.more.originalValue}</span>
                                    <span className="more-discount-value">${this.props.info.more.discountValue}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export { SeriesItem }