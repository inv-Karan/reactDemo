import React from 'react'

class clock extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            date: new Date()
        }
    }

    componentDidMount() {
        this.timer = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    tick = () => {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return(
        <div>time is: {this.state.date.toLocaleTimeString()}</div>
        )
    }
}


export default clock