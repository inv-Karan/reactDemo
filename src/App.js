import React, {Component} from 'react';
import './App.css';
import DetailsKaran from './details'
import WC from '../src/welcome'
import TY from '../src/thankyou'
import CT from '../src/count'
import DCT from '../src/decount'
import FRM from '../src/form'

class App extends Component{
  constructor(){
    super()
    this.state = {
      isShow: false
    }
  }
  render(){
  return (
    <div className="App">
      <WC name={'karan'} />
      <WC name={'karan1'} />
      <WC name={'karan1fdsf'} />
      ------
      <DetailsKaran></DetailsKaran>
      ------
      <TY name={'karan'}/>
      ----------
      <CT />
      -------
      <DCT />
      -------
      <button onClick={() => {this.setState({isShow: !this.state.isShow})}}>Toggle form </button>
      {this.state.isShow ? <FRM /> : null}
    </div>
  );
  }
}

export default App;
