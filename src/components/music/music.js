import React from 'react';
import "../../style/settings.css";
import axios from 'axios'
// import { BrowserRouter as Router, Switch, Route, NavLink, Link } from 'react-router-dom';



class Music extends React.Component{
    // constructor(props) {
    //   super(props);
      
    // }
  

ledOn(){
  axios.get('http://192.168.0.142/led/1')
}
ledOff(){
  axios.get('http://192.168.0.142/led/0')
}


    render() {
      return (
        <div class="settings">

       <h1>Music</h1>
       <h1>Music</h1>
       <h1>Music</h1>
       <h1>Music</h1>
       <h1>Music</h1>
       <h1>Music</h1>
       <button onClick={this.ledOn}>led on</button>
       <button onClick={this.ledOff}>led off</button>
       <h1>Music</h1>
       <h1>Music</h1>
       <h1>Music</h1>
       <h1>Music</h1>
       <h1>Music</h1>
                </div>
      );
    }
  }
  
export default Music