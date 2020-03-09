import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import "../../all";
import "../../style/navbar.css";


console.log("navbar loaded")

class Navbar extends Component {
  render() {
    return ( 
        <div>
          <div className="nnpm avbar fixed-bottom bg-dark">
            <NavLink to='/articles' className="" activeClassName="navbar_btn__touch_layer_active"><i class="fas fa-newspaper"></i></NavLink>
            <NavLink to='/users' className=""><i class="fas fa-users"></i></NavLink>
            <NavLink to='/signin' className=""><i class="fas fa-user"></i></NavLink>
            <NavLink to='/signup' className=""><i class="fas fa-user-plus"></i></NavLink>
            <NavLink to='/music' className=""><i class="fas fa-music"></i></NavLink>
            <NavLink to='/videos' className=""><i class="fas fa-tv"></i></NavLink>
            <NavLink to='/lighting' className=""><i class="fas fa-lightbulb"></i></NavLink>
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



    