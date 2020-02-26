import React, { Component } from "react";
import "../../style/clock.css";


class Clock extends Component {
  render() {
    return (    
        <div className="clock">
        <div className="title-clock">
          <img alt="logo" src="/logo192.png" className="App-logo"></img>
        </div>
        <div className="title-clock" id="timeH"></div>
        <div className="title-clock" id="timeM"></div>
        <div className="title-clock" id="timeS"></div>
      </div>
        );
}
}

export default Clock
