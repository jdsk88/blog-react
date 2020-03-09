import React from 'react';
import axios from 'axios';
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
      axios.get('http://192.168.0.142/led/1')
    }
    ledOff42(){
      axios.get('http://192.168.0.142/led/0')
    }
    ledOn98(){
      axios.get('http://192.168.0.198/led/1')
    }
    ledOff98(){
      axios.get('http://192.168.0.198/led/0')
    }
    ledOn13(){
      axios.get('http://192.168.0.113/led/1')
    }
    ledOff13(){
      axios.get('http://192.168.0.113/led/0')
    }

    handleClick() {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));
    }
    render() {
      return (
        <div class="lighting">
<label>142</label>
       <button onClick={this.ledOn42}>led on</button>
       <button onClick={this.ledOff42}>led off</button>
<label>198</label>
       <button onClick={this.ledOn98}>led on</button>
       <button onClick={this.ledOff98}>led off</button>
<label>113</label>
       <button onClick={this.ledOn13}>led on</button>
       <button onClick={this.ledOff13}>led off</button>




        {/* <Router> <div className="overflow">
        
                <div class="lighting-container">
                <div className="lighting__options_container">
                  <NavLink to='/signin' className="power__options_flex" ><div className="power__options"><i class="fas fa-lightbulb"></i><label>zone 1</label></div></NavLink>
                  <NavLink to='/signup' className="power__options_flex" ><div className="power__options"><i class="fas fa-lightbulb"></i><label>zone 2</label></div></NavLink>
                  <NavLink to='/users' className="power__options_flex" ><div className="power__options"><i class="fas fa-lightbulb"></i><label>zone 3</label></div></NavLink>
                  <NavLink to='/settings' className="power__options_flex" ><div className="power__options"><i class="fas fa-lightbulb"></i><label>zone 4</label></div></NavLink>
                </div>
                <button className="toggle" onClick={this.handleClick}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
                </div>
                </div>
                <Switch> */}
                      {/* <Route  path='/articles' component={ArticlesList} /> */}
                      {/* <Route exactly path='/users' component={UsersList} />
                      <Route exactly path='/signin' component={LoginPage} />
                      <Route exactly path='/signup' component={AddUserForm} /> */}
        {/* </Switch> */}
        {/* </Router> */}
        
                </div>
      );
    }
  }
  
export default Lighting