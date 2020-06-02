import React, { Component } from 'react';
import './App.css';
import DetailsKaran from './details'
import WC from '../src/welcome'
import TY from '../src/thankyou'
import CT from '../src/count'
import DCT from '../src/decount'
import FRM from '../src/form'
import  a, { name as b , add } from '../src/exportType'

const Demo = (props) => {
  // return (<div>{`welcome ${props.abc}`}</div>) functional component to retrieve data from class component and return result. Props for tag
  return (<div>{props.abc}</div>)
} 

const Demo1 = (qwe) => {
  //functional component to retrieve data from class component and return result. Simple function call for assigning direct value.
  return <div>{`welcome ${qwe}`}</div>
}

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
      -----
      <Demo abc={'123'}/>
      {/* tag */}
      ----
      {Demo1('123')}
      {/* direct value */}
      ------
      {a}---{b}----{add}
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
