import React from 'react';
import { SeriesItem } from './seriesItem'
import { Carousel } from './carousel/carousel'
const info = [
    [
        {
            src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3587092308,360996468&fm=26&gp=0.jpg',
            content: '../img/series/lego.png',
            discount: '75%',
            more: {
                discount: '50%',
                originalValue: '66',
                discountValue: '33'
            }
        },
        {
            src: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1531229577,3396527109&fm=26&gp=0.jpg',
            content: '../img/series/lego.png',
            discount: '50%',
            more: {
                discount: '25%',
                originalValue: '88',
                discountValue: '44'
            }
        },
        {
            src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1949121822,3643365383&fm=26&gp=0.jpg',
            content: '../img/series/lego.png',
            discount: '50%',
            more: {
                discount: '25%',
                originalValue: '88',
                discountValue: '44'
            }
        },
    ],
    [
        {
            src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1949121822,3643365383&fm=26&gp=0.jpg',
            content: '../img/series/lego.png',
            discount: '50%',
            more: {
                discount: '25%',
                originalValue: '88',
                discountValue: '44'
            }
        },
        {
            src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3587092308,360996468&fm=26&gp=0.jpg',
            content: '../img/series/lego.png',
            discount: '75%',
            more: {
                discount: '50%',
                originalValue: '66',
                discountValue: '33'
            }
        },
        {
            src: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1531229577,3396527109&fm=26&gp=0.jpg',
            content: '../img/series/lego.png',
            discount: '50%',
            more: {
                discount: '25%',
                originalValue: '88',
                discountValue: '44'
            }
        }
    ],
    [
        {
            src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1949121822,3643365383&fm=26&gp=0.jpg',
            content: '../img/series/lego.png',
            discount: '77%',
            more: {
                discount: '22%',
                originalValue: '88',
                discountValue: '44'
            }
        },
        {
            src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3587092308,360996468&fm=26&gp=0.jpg',
            content: '../img/series/lego.png',
            discount: '88%',
            more: {
                discount: '33%',
                originalValue: '66',
                discountValue: '33'
            }
        },
        {
            src: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1531229577,3396527109&fm=26&gp=0.jpg',
            content: '../img/series/lego.png',
            discount: '99%',
            more: {
                discount: '44%',
                originalValue: '88',
                discountValue: '44'
            }
        }
    ]
]
export class Series extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            width:0
        }
        
    }
    componentWillMount(){
        window.onresize = ()=>{

            this.setState({
                width:document.body.offsetWidth
            })
            console.log(this.state.width)
        }
    }
    render() {
        return (
            <Carousel>
                {
                    info.map((item, index) => {
                        return (
                            <div key={index} className={this.props.class} style={{transform:" translateX("+this.state.width*index+"px)"}}>
                                {
                                    item.map((item2, index2) => {
                                        return (
                                            <SeriesItem key={index2} info={item2}></SeriesItem>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }

            </Carousel>
        )
    }
}
