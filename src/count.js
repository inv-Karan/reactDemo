import React, { Component } from 'react'

class Counter extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }

    }

    render() {
        return(
            <div>
                Counter is: {this.state.count}
                <button onClick={() => {
                    this.setState({
                        count : ++this.state.count
                    })
                }}> increment </button>
            </div>
        )
    }
}

export default Counter