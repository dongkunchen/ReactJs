import {
    increment,
    decrement,
    incrementAsync
} from '../../redux/actions/count'
import { connect } from 'react-redux'

import React, { Component } from 'react'

class Count extends Component {

    state = { carName: '特斯拉' }

   

    increment = () => {
        const { value } = this.selectNumber
        this.props.increment(value*1)
    }

    decrement = () => {
        const { value } = this.selectNumber
        this.props.decrement(value*1)
    }

    incrementIfOdd = () => {
        const { value } = this.selectNumber
        if(this.props.newCount %2 !== 0){
            this.props.increment(value*1)
        }
    }

    incrementAsync = () => {
        const { value } = this.selectNumber
        this.props.incrementAsync(value*1,500)
    }

    render() {
        return (
            <div>
                <h2>我是Count組件,下方組件總人數為{this.props.personCount}</h2>
                <h4>當前求和為: {this.props.newCount}</h4>
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="1">2</option>
                    <option value="1">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>當前求和為奇數在加</button>&nbsp;
                <button onClick={this.incrementAsync}>異步加</button>&nbsp;
            </div>
        )
    }
}

export default connect(
    state => ({ 
        newCount: state.count,
        personCount:state.persons.length 
    }), 
    {
        increment,
        decrement,
        incrementAsync,
    }
)(Count)