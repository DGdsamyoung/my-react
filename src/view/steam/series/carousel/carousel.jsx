import React from 'react';
import {
    LeftOutlined, RightOutlined
} from '@ant-design/icons';
import './carousel.scss'

// import { TransitionGroup, CSSTransition } from 'react-transition-group'
export class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            focused: false
        }
        console.log(this.props.children[0])  
        // this.props.children[0].props.className = "series-wrapper"
 
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
    selectOne = (index1) => {
        this.setState({
            index: index1
        })
    }

     renderChildren= () => {
    
        //遍历所有子组件
        return React.Children.map(this.props.children, child => {
                console.log(child.key,this.state.index)
                if(child.key == this.state.index){
            return React.cloneElement(child, {
              //把父组件的props.name赋值给每个子组件
              className:"active-carousel"
            })
        } else {
            return React.cloneElement(child, {
                //把父组件的props.name赋值给每个子组件
                className:"series-wrapper"
              })
        }
        })
      }
    render() {
        return (
            <div className="overflow">
                <div className="carousel-container">
                <div className="carousel-left">
                    1
                </div>
                            {/* {this.props.children[this.state.index] } */}
                            {this.renderChildren()}
                            <div className="carousel-right">
                    2
                </div>
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
                <div className="small-item-wrapper">
                    {
                        this.props.children.map((item, index1) => {
                            return (
                                <div key={index1} onClick={this.selectOne.bind(this, index1)} className={index1 === this.state.index ? 'select-small-item' : 'small-item'}>

                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
