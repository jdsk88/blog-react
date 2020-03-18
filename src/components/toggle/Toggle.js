import React, { Component } from 'react'
import axios from 'axios'
import '../../style/switch.css'



class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isActive: false};
      this.state = {isActiveALL: false};
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
      this.handleClickALL = this.handleClickALL.bind(this);
      this.led98ON = () => fetch('http://192.168.0.198/led/1')
      this.led98OFF = () => fetch('http://192.168.0.198/led/0')
      this.led13ON = () => fetch('http://192.168.0.113/led/1')
      this.led13OFF = () => fetch('http://192.168.0.113/led/0')
      this.led42ON = () => fetch('http://192.168.0.142/led/1')
      this.led42OFF = () => fetch('http://192.168.0.142/led/0')
      this.rgbwON = () => fetch('http://192.168.0.161/s/ffffffff')
      this.rgbwOFF = () => fetch('http://192.168.0.161/s/00000000')
      this.lampON = () => fetch('http://192.168.0.195/s/1/1')
      this.lampOFF = () => fetch('http://192.168.0.195/s/1/0')
    }

    handleClick() {
      this.setState(state => ({
        isActive: !state.isActive
      }));
      if (this.state.isActive){
            this.led98OFF();
            console.log('Off')
        } else {
            this.led98ON();
            console.log('On')
        }
      
    }
    handleClickALL() {
      this.setState(state => ({
        isActiveALL: !state.isActiveALL
      }));
      if (this.state.isActiveALL){
            this.led98OFF();
            this.led42OFF();
            this.led13OFF();
            this.rgbwOFF();
            this.lampOFF();
            console.log('All Off')
        } else {
            this.led98ON();
            this.led42ON();
            this.led13ON();
            this.rgbwON();
            this.lampON();
            console.log('All On')
        }
      
    }


  
    render() {
      return (<>
        <button className={this.state.isActive ? 'toggleActive' : 'toggleNotActive' }  onClick={this.handleClick}>
          {/* {this.state.isActive ? 'ON' : 'OFF'} */}
          <i className="fas fa-light-bulb"></i>
        </button>
        <button className={this.state.isActiveALL ? 'toggleActiveALL' : 'toggleNotActiveALL' }  onClick={this.handleClickALL}>
          {this.state.isActiveALL ? 'ALL ON' : 'ALL OFF'}
        </button>
     </>);
    }
  }

  export default Toggle


// import React, { Component } from "react";
// import '../../style/switch.css'

// class ToggleSwitch extends Component {
//   render() {
//     return (
//       <div className="toggle-switch">
//         <input
//           type="checkbox"
//           className="toggle-switch-checkbox"
//           name="toggleSwitch"
//           id="toggleSwitch"
//         />
//         <label className="toggle-switch-label" htmlFor="toggleSwitch">
//           <span className="toggle-switch-inner" />
//           <span className="toggle-switch-switch" />
//         </label>
//       </div>
//     );
//   }
// }

// export default ToggleSwitch;