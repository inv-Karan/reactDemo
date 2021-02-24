// import React, {Component} from 'react';
// import './App.css';
// import DetailsKaran from './details'
// import WC from '../src/welcome'
// import TY from '../src/thankyou'
// import CT from '../src/count'
// import DCT from '../src/decount'
// import FRM from '../src/form'

// class App extends Component{
//   constructor(){
//     super()
//     this.state = {
//       isShow: false
//     }
//   }
//   render(){
//   return (
//     <div className="App">
//       <WC name={'karan'} />
//       <WC name={'karan1'} />
//       <WC name={'karan1fdsf'} />
//       ------
//       <DetailsKaran></DetailsKaran>
//       ------
//       <TY name={'karan'}/>
//       ----------
//       <CT />
//       -------
//       <DCT />
//       -------
//       <button onClick={() => {this.setState({isShow: !this.state.isShow})}}>Toggle form </button>
//       {this.state.isShow ? <FRM /> : null}
//     </div>
//   );
//   }
// }

// export default App;

const express = require('express');
const app = express();
require('dotenv').config();

var AWS = require('aws-sdk');

app.get('/', (req, res) => {

    console.log("Message = " + req.query.message);
    console.log("Number = " + req.query.number);
    console.log("Subject = " + req.query.subject);
    var params = {
        Message: req.query.message,
        PhoneNumber: '+' + req.query.number,
        MessageAttributes: {
            'AWS.SNS.SMS.SenderID': {
                'DataType': 'String',
                'StringValue': req.query.subject
            }
        }
    };

    var publishTextPromise = new AWS.SNS({ apiVersion: '2010-03-31' }).publish(params).promise();

    publishTextPromise.then(
        function (data) {
            res.end(JSON.stringify({ MessageID: data.MessageId }));
        }).catch(
            function (err) {
                res.end(JSON.stringify({ Error: err }));
            });

});

app.listen(3000, () => console.log('SMS Service Listening on PORT 3000'))

