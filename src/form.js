import React, { Component } from 'react'

class Form extends Component {
  constructor() {
    console.log('constructor called')
    super()
    this.state = {
      name: 'k',
      address: 'p',
      isShow: false
    }
  }

  componentWillMount(){
    console.log('componentWillMount called')
  }

  componentDidMount(){
    console.log('componentDidMount called')
  }

  componentWillUnmount(){
    console.log('componentWillUnmount called')
  }

  render() {
    console.log('render called')
    const { name, address, isShow } = this.state;
    return (
      <div>
        <p>Name: <input type="text" value={name} onChange={({target : {value}}) => {
          this.setState({ name: value })
        }} /></p>
        <p>Address: <input type='text' value={address} onChange={({target: {value}}) => {
          this.setState({ address: value })
        }} /></p>

        <button onClick={() => {
          this.setState({ isShow: !isShow })
        }}>
          Submit
                </button>

        {isShow ?
          <div>
            <p>Name is {name}</p>
            <p>Address is {address}</p>
          </div>
          : null}

      </div>
    )
  }
}

export default Form