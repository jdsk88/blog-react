import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import "../../all";
import "../../style/navbar.css";


console.log("navbar loaded")

class Navbar extends Component {
  render() {
    return ( 
        <div>
        <div className="navbar">
            <div className="navbar_btn navbar_btn__LEFT" ><NavLink to='/articles' className="navbar_btn nav"><i class="fas fa-newspaper"></i></NavLink></div>
            <div className="navbar_btn navbar_btn__LEFT" ><NavLink to='/users' className="navbar_btn"><i class="fas fa-users"></i></NavLink></div>
            <div className="navbar_btn navbar_btn__LEFT" ><NavLink to='/signup' className="navbar_btn"><i class="fas fa-user-plus"></i></NavLink></div>
        </div>
        </div>
        );
}
}

export default Navbar

    //     <div>
    //     <div className="navbar">
    //     <div className="navbar_btn navbar_btn__LEFT" ><i class="fas fa-arrow-left"></i></div>
    //     <div className="navbar_btn navbar_btn__LEFT" ><i class="fas fa-newspaper"></i></div>
    //     <div className="navbar_btn navbar_btn__LEFT" ><i class="fab fa-facebook-messenger"></i></div>
    //     <div className="navbar_btn navbar_btn__LEFT" ><i class="fas fa-arrow-right"></i></div>
    //     <div className="navbar_btn navbar_btn__LEFT" ><i class="fas fa-camera-retro"></i></div>
    //     <div className="navbar_btn navbar_btn__LEFT" ><i class="fas fa-bars"></i></div>
    //     {/* <div className="navbar_btn navbar_btn__RIGHT" ><i class="fas fa-cog"></i></div> */}
    //   </div>
    //   </div>