import React from 'react';
class ImgItem extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="itme-img-wrapper">
               <div className="img-wrapper"></div>
               <div className="content-wrapper">右</div>
            </div>
        )
    }
}
export default ImgItem