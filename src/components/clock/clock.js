import React from "react";
import "../../style/clock.css";
import date from "date-and-time";

function Clock() {

// time interval
setInterval(function () {
    //   const time = date.format(new Date(), "HH:mm:ss");
    const timeH = date.format(new Date(), "HH");
    const timeM = date.format(new Date(), "mm");
    const timeS = date.format(new Date(), "ss");
    document.getElementById("timeH").innerText = timeH;
    document.getElementById("timeM").innerText = timeM;
    document.getElementById("timeS").innerText = timeS;
}, 1000);
// date interval
setInterval(function () {
    // const dateY = date.format(new Date(), "D/M/YYYY");
    // const dateM = date.format(new Date(), "MMMM");
    // const dateD = date.format(new Date(), "Z A");
    // const dateW = date.format(new Date(), "dddd");
    //   document.getElementById("dateY").innerText = dateY;
    //   document.getElementById("dateM").innerText = dateM;
    //   document.getElementById("dateD").innerText = dateD;
    //   document.getElementById("dateW").innerText = dateW;
}, 1000);


  // render() {
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
// }

export default Clock
