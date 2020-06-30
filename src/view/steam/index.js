import React from 'react';
import './steam.css'
import MyHeader from './header/header'
import MyNarbar from './navbar/navbar'
import MyCarousel from './carousel/carousel.jsx'
import MyOnSale from './onsale/onsale'
import {Series} from './series/series'
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
                <MyOnSale></MyOnSale>
                <Series></Series>
            </div>
        )
    }
}
export default Steam;
