import React, {Component} from 'react'
class ThankYou extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentName:'Jinal'
    }
  }
    render() {
      return (
        <div>
          Thank you!!! {this.props.name}
          <button onClick={() => {
            if(this.state.currentName === 'Karan1')
              this.setState({currentName: 'Jinal'})
            else 
              this.setState({currentName: 'Karan1'})   
          }}>
            {this.state.currentName}
          </button>
        </div>
      );
    }
  }

export default ThankYou