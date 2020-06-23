import React from 'react';
import './steam.css'
import MyHeader from './header/header'
import MyNarbar from './navbar/navbar'
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
            </div>
        )
    }
}
export default Steam;
