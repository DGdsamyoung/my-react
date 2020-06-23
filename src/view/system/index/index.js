import React from 'react';
import './index.scss'
import TopNav from './navMenu/topNav'
import LeftMenu from './navMenu/leftMenu'
import { withRouter } from 'react-router-dom'
const mainStyle = {
    padding: '20px',
    marginLeft: '250px'
}
class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '1',
            number: '2',
            focused: true
        }
    }
    componentWillMount() {
        //组件加载时只调用，以后组件更新不调用，整个生命周期只调用一次，此时可以修改state
        console.log(this.props)
        //    this.props.history.push({ pathname: '/index/myInput', state: { name: 'sunny' } })
    }
    test() {
        console.log(this.props.location.state.name)
    }
    changeInputValue = (value) => {
        console.log(value.target.value, 1)
        this.setState({
            name: value.target.value
        })
    }
    render() {
        return (
            <div className="main-layout">
                <TopNav store={this.props.store}></TopNav>
                <LeftMenu store={this.props.store} history={this.props.history}></LeftMenu>
                <div style={mainStyle}>
                {this.props.children}
                </div>
            </div>
        )
    }
}
export default withRouter(Index);
