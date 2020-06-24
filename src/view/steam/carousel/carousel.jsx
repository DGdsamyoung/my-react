import React from 'react';
import Item from './carouselItem'
import ImgItem from './imgItem'
import './Carousel.scss'


const info = [
    {
        imgList: [
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=116129698,1494879141&fm=26&gp=0.jpg",
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1746004835,2487098339&fm=26&gp=0.jpg",
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1688744315,237311114&fm=26&gp=0.jpg",
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2571759023,2351002417&fm=26&gp=0.jpg"
        ],
        mainImg: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2823640242,4256122871&fm=11&gp=0.jpg"
    },
    {
        imgList: [
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2696455550,1951208996&fm=26&gp=0.jpg",
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1746004835,2487098339&fm=26&gp=0.jpg",
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1688744315,237311114&fm=26&gp=0.jpg",
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2571759023,2351002417&fm=26&gp=0.jpg"
        ],
        mainImg: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3991859321,3781205385&fm=26&gp=0.jpg"
    }
]
class Carousel extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="carousel-wrapper">
                <Item age='88'>
                    {
                        info.map((item,index)=>{
                            return (
                                <ImgItem key={index} info={item}></ImgItem>
                            )
                        })
                    }
  
                </Item>
            </div>
        )
    }
}
export default Carousel