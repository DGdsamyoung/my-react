import React from 'react'
import { createStore } from 'redux'
import Counter from './counter'
const counter   = (state = 0, action) => {
    console.log(action,state)
        switch (action.type) {
          case 'INCREMENT':
            return JSON.parse(JSON.stringify(state)) + 1
          case 'DECREMENT':
            return state - 1
          default:
            return state
        }
      }
 

const store = createStore(counter)
class myRedux  extends React.Component {
    constructor(props) {
      super(props);
        console.log(this.props)
        this.state = {
            value:0
        }
    }
    add = ()=> {
        console.log('加',store.getState())
        store.dispatch({ type: 'INCREMENT' })
        this.getValue()
        this.setState({
            value:store.getState()
        })
    }

    getValue = ()=>{
        console.log(store.getState())
        return store.getState()
    }

    render(){
        return(
            <div>
            <Counter
    value={this.state.value}
    onIncrement={this.add}
    getValue={this.getValue}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
  />
  </div>
        )
    }
    
}
export default myRedux
