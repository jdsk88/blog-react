import React from 'react';
import Toggle from '../toggle/Toggle'
import ISwitch from '../../components/iSwitch/iSwitch'
import ISwitch4 from '../../components/iSwitch/iSwitch4'
import IDim from '../../components/iDim/iDim'


import "../../style/lighting.css";
// import { BrowserRouter as Router, Switch, Route, NavLink, Link } from 'react-router-dom';



class Lighting extends React.Component{
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
  
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }
  
    ledOn42(){
      fetch('http://192.168.0.142/led/1')
    }
    ledOff42(){
      fetch('http://192.168.0.142/led/0')
    }
    ledOn98(){
      fetch('http://192.168.0.198/led/1')
    }
    ledOff98(){
      fetch('http://192.168.0.198/led/0')
    }
    ledOn13(){
      fetch('http://192.168.0.113/led/1')
    }
    ledOff13(){
      fetch('http://192.168.0.113/led/0')
    }

    handleClick() {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));
    }
    render() {
      return (<>
      <ISwitch />
      <ISwitch4 />
      {/* <IDim /> */}
      
      <div className="container">
      </div>
                </>
      );
    }
  }
  
export default Lighting


