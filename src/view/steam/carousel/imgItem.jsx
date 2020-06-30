import React from 'react';

class ImgItem extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = {
            imgSrc: this.props.info.mainImg
        }
    }
    changeBg(item) {
        this.setState({
            imgSrc: item
        })
    }
    render() {
        return (
            <div className="itme-img-wrapper">
                <div className="img-wrapper" style={{ backgroundImage: 'url(' + this.state.imgSrc + ')' }}>
                    {/* <img  src={this.props.src} alt=""/> */}
                </div>
                <div className="content-wrapper">
                    <div className="content-title">{this.props.info.title}</div>
                    <div className="content-img">
                        {
                            this.props.info.imgList.map((item, index) => {
                                return (
                                    <div key={index} className="img-item-wrapper" onMouseEnter={e => { this.changeBg(item) }}>
                                        <div className="img-item-bg"> </div>
                                        <div className="img-item" style={{ backgroundImage: 'url(' + item + ')' }}></div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="content-subtitle">{this.props.info.subtitle}</div>
                    <div className="tags-wrapper">
                        {
                            this.props.info.tags.map((item, index) => {
                                return (
                                    <div key={index} className="tags-item">{item} </div>
                                )
                            })
                        }
                    </div>
                    <div className="value-wrapper">
             
                    </div>
                </div>
            </div>
        )
    }
}
export default ImgItem