import React, { Component } from 'react'

export class ClassClick extends Component {
    
    clickHandler() {
        console.log("clicked")
    }
    
    render() {
        return (
            <div>
                <button className='btn btn-secondary' onClick={this.clickHandler}>click</button>
            </div>
        )
    }
}

export default ClassClick