import React from 'react';
import {SeriesItem} from './seriesItem'
const info ={
    src:'http://img1.imgtn.bdimg.com/it/u=3506059711,1760541670&fm=26&gp=0.jpg',
    content:'../img/series/lego.png'
}
export class Series extends React.Component {
    constructor(props) {
        super(props);

    }
    render(){
        return(
            <div className="series-wrapper">
                <SeriesItem info={info}></SeriesItem>
            </div>
        )
    }
}
