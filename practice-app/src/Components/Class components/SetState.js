import React, { Component } from 'react'

class SetState extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    // incrementCounter() {
    //     this.setState({
    //         count: this.state.count + 1
    //     }, () => { console.log("callback value", this.state.count) })
    //     console.log(this.state.count)
    // }

    incrementCounter() {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
    }

    render() {
        return (
            <div>
                <button className='btn btn-secondary' onClick={() => { this.incrementCounter() }}>count is {this.state.count}</button>
            </div>
        )
    }
}

export default SetState