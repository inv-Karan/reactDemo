import React, { Component } from 'react'

class Decounter extends Component {
    constructor(){
        super()
        this.state = {
            decount: 0
        }
    }

    render(){
        return(
            <div>
                Decounter is: {this.state.decount}
                <button onClick={() => {
                    this.setState({
                        decount : --this.state.decount
                    })
                }}> decrement </button>
            </div>
        )
    }
}

export default Decounter