import React from 'react';
import './About.css'
class About extends React.Component {
    constructor(props, context ) {
        super(props, context );
    }
    render() {
        return (
            <div className="warpper">
            <div className="left">
                left
                <div className="h5">
                    {this.props.children}
                </div>
            </div>
                <div className="center">
                    center
                    <div className="h5">
                        B
                    </div>
                </div>
                <div className="right">
                    right
                </div>
            </div>
        )
    }
}
export default About;
