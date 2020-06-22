import React from 'react'

class Tab extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            b1: props.button1,
            b2: props.button2,
            b3: props.button3
        }
    }

    changeValue = (key, value) => {
        this.setState({
            [key]: value
        })
    }

    render() {
        return(
            <>
                <p>
                    <button onClick = {() => {
                        this.changeValue('b1', ++this.state.b1)
                        }}> 
                        val: {this.state.b1} 
                    </button> 
                    <button onClick = {() => {
                        this.changeValue('b2', this.state.b1)
                    }}> 
                        val: {this.state.b2} 
                    </button>
                    <button onClick ={() => {
                        this.changeValue('b3', this.state.b1 + this.state.b2)
                    }}>
                        val: {this.state.b3}
                    </button>
                </p>
            </>
        )
    }
}

export default Tab