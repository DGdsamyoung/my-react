/* eslint-disable no-useless-constructor */
import React from 'react';
import './Carousel.scss'
import {
    LeftOutlined, RightOutlined
} from '@ant-design/icons';
import { CSSTransition } from 'react-transition-group'
class CarouselItem extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            index: 0,
            focused: false
        }

    }
    static defaultProps = {  // 默认props
        width: '940px',
        height: '400px'
    }
    prevOne = () => {
        this.setState({
            focused: true
        })
        if (this.state.index === 0) {
            this.setState({
                index: this.props.children.length - 1 // 如果从0返回上一页的话
            })
        } else {
            this.setState({
                index: this.state.index - 1
            })
        }

    }
    nextOne = () => {
        if (this.state.index === this.props.children.length - 1) {
            this.setState({
                index: 0
            })
        } else {
            this.setState({
                index: this.state.index + 1
            })
        }

    }
    render() {
        return (
            <div className="Carousel-item-wrapper" style={{ width: this.props.width, height: this.props.height }}>
                {/* <img src={[require("../img/carousel/cal-bg.jpg")]} alt="" /> */}
                <CSSTransition
                    in={this.state.focused}
                    timeout={2000}
                    classNames='slide'
                >
                    {this.props.children[this.state.index]}

                </CSSTransition>
                <div className="item-left-icon">
                    <div className="left-icon-bg" onClick={this.prevOne}>
                        <LeftOutlined />
                    </div>
                </div>
                <div className="item-right-icon">
                    <div className="right-icon-bg" onClick={this.nextOne} >
                        <RightOutlined />
                    </div>
                </div>
            </div>
        )
    }
}
export default CarouselItem