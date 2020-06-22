import React from 'react'
import HDNG from '../todo/header'
import LST from '../todo/create_input'
import B from './footer'
import WC from './welcome'
import Login from './login'
import Com from './testComponent'
import { data } from './data'
import { data as data1 , dataSchool} from './data1'
import D from './moviecomponent'
import D1 from './schoolcomponent'
import S from './schoolform'
import API from './apicalls'

const userList = data.map(obj => obj.name)

const printclickedname = (name) => {
  console.log(name)
}

// const printclickeditem = (item) => {
//   console.log(item)
// }

class ToDoMain extends React.Component {
  constructor() {
    super()
    this.state = {
      currentName: 'Jinal',
      currentFooter: 'All',
      age: 0,
      flag: true,
      data : data
    }
  }

  updateCurrentName = (name) => {
    this.setState({
      currentName: name
    })
  }

  // changeName = () => {
  //   const { currentName } = this.state
  //   const a = currentName === 'Jinal' ? 'Karan' : 'Jinal'
  //   this.setState({
  //     currentName: a
  //   })
  // }

  method = (das) => {
    this.setState({
      currentFooter: das
    })
  }

  getTask = (name, list) => {
    return list.filter(a => a.name === name)[0].tasks
  }

  // buttonClicked = (val) => {
  //   this.setState({
  //     age: val
  //   })
  // }

  // setFlag = (val1) => {
  //   this.setState({
  //   flag: val1
  //   })
  // }
  
  render() {
    const { currentName, currentFooter, age, flag, data } = this.state
    const tasks = this.getTask(currentName, data)
    //debugger
    return (
      <>
       {/* <Com name={currentName} age={age} update={this.buttonClicked} flag={flag} set={this.setFlag} new_Name={this.changeName}/> */}
        <Login
          userList={userList}
          onSelectUser={(name) => {
            this.updateCurrentName(name)
            printclickedname(name)
          }
          }
        />
        <WC name={currentName} />
        <HDNG />
        <LST tasks1={tasks}/>
          Which footer is selected? {currentFooter}
        <B 
          onSelectItem={(item) => {
            this.method(item)
            //printclickeditem(item)
          }
          }
        />
        {
          data1.map((m) =>  <D mn={m.moviename} mc={m.moviecast} mr={m.movierating} /> )
        }
        {
          dataSchool.filter((f) => {return f.total>500}).map((n) => <D1 n={n.name} t={n.trustee} a={n.area} t1={n.total} /> )
        }
        <S />
        <API />
      </> 
    )
  }
}

export default ToDoMain