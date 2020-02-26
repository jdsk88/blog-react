import React, { Component } from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import "../../all";
import "../../style/navbar.css";


console.log("navbar loaded")

class Navbar extends Component {
  render() {
    return ( 
        
        <Router>
        <div>
        <div className="navbar">
            <div className="navbar_btn navbar_btn__LEFT" ><Link to='/articles' className="navbar_btn nav"><i class="fas fa-newspaper"></i></Link></div>
            <div className="navbar_btn navbar_btn__LEFT" ><Link to='/users' className="navbar_btn"><i class="fas fa-users"></i></Link></div>
            <div className="navbar_btn navbar_btn__LEFT" ><Link to='/signup' className="navbar_btn"><i class="fas fa-user-plus"></i></Link></div>
        </div>
        </div>
      </Router>
        


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