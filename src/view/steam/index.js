import React from 'react';
import './steam.css'
import MyHeader from './header/header'
import MyNarbar from './navbar/navbar'
import MyCarousel from './carousel/carousel.jsx'
class Steam extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="wrapper">
                <MyHeader></MyHeader>
                <MyNarbar></MyNarbar>
                <MyCarousel></MyCarousel>
            </div>
        )
    }
}
export default Steam;
