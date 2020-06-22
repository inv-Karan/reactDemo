import React, {Component} from 'react';
import './App.css';
import DetailsKaran from './details'
import WC from '../src/welcome'
import TY from '../src/thankyou'
import CT from '../src/count'
import DCT from '../src/decount'
import FRM from '../src/form'
import ToDo from './todo/main1'
import BMS from './todo/main'

class App extends Component{
  constructor(){
    super()
    // this.state = {
    //   isShow: false
    // }
  }
  render(){
  return (
    <div className="App container--fluid">
      {/* <WC name={'karan'} />
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
      {this.state.isShow ? <FRM /> : null} */}
      {/* <ToDo /> */}
      <BMS />
    </div>
  );
  }
}

export default App;
