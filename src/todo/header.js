import React from 'react'

class Heading extends React.Component{
    constructor(){
        super()
        this.state = {
            text: ''
        }
    }

    onChangeText = (text) => {
        this.setState({text : text})
    }

    render(){
        return(
            <>
                <p><input type='text' placeholder="What needs to be done?"  onChange={(e) => {
                    this.onChangeText(e.target.value)
                    }}>
                    </input><button onClick={(t) => {
                        // t.text
                    }}>OK</button></p>
                </>
        )
    }
            
}

export default Heading