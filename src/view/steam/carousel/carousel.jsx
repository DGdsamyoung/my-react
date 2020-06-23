import React from 'react';
import Item from './carouselItem'
import ImgItem from './imgItem'
class Carousel extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Item age='88'>
                   <ImgItem></ImgItem>
                    <img src={[require("../img/carousel/cal-bg-2.jpg")]} alt="" />
                    <img src={[require("../img/carousel/cal-bg-3.jpg")]} alt="" />
                </Item>
            </div>
        )
    }
}
export default Carousel