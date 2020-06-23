import React from 'react';
const style={
    color:'black',
    height:'50px',
    background:'#31BBFD'
}
class TopNav extends React.Component {
constructor(props){
    super(props)
    console.log(this.props.store.getState())
}
    render() {
        return (
        <div style={style}>
               用户： {this.props.store.getState().visibilityFilter}
        </div>
        );
    }
}
export default TopNav
