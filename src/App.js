import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import './style/App.css';
import UsersList from './components/user/UsersList';
import ArticlesList from './components/article/ArticlesList';
import Clock from './components/clock/clock';
import Navbar from './components/navbar/navbar';
import AddUserForm from './components/add_user_form/AddUserForm';
import LoginPage from './components/login/login';
import Video from './components/video/videoPlayer';
import Form from './components/form/form'
import Power from './components/power/power'
import Lighting from './components/lighting/lighting'
function App() {
  
  return (
    <div className="App">
      {/* <div className="res-not-supported"> */}
      <Router>
      <header className="App-header">
      <div className="header-nav">
        <Clock />  
        <div className="header-nav__power-btn" ><NavLink to='/power' className=""><i class="fas fa-ellipsis-v"></i><label></label></NavLink></div>
      </div>
        </header>
        <div>
      <Switch>
              <Route exactly path='/articles' component={ArticlesList} />
              <Route exactly path='/users' component={UsersList} />
              <Route exactly path='/login' component={LoginPage} />
              <Route exactly path='/signup' component={AddUserForm} />
              <Route exactly path='/video' component={Video} />
              <Route exactly path='/form' component={Form} />
              <Route exactly path='/power' component={Power} />
              <Route exactly path='/lighting' component={Lighting} />
              <Route render={() => <h1>404: page not found</h1>} />
        </Switch>
        <div className="navbar">
            <NavLink to='/articles' className="navbar_btn__touch_layer" ><div className="navbar_btn navbar_btn__LEFT" ><i class="fas fa-newspaper"></i><label>news</label></div></NavLink>
            <NavLink to='/lighting' className="navbar_btn__touch_layer" ><div className="navbar_btn navbar_btn__LEFT" ><i class="fab fa-facebook-messenger"></i><label>messenger</label></div></NavLink>
            {/* <NavLink to='/lighting' className="navbar_btn__touch_layer" ><div className="navbar_btn navbar_btn__LEFT" ><i class="fas fa-lightbulb"></i><label>lighting</label></div></NavLink> */}
            <NavLink to='/' className="navbar_btn__touch_layer" ><div className="navbar_btn navbar_btn__LEFT" ><i class="fas fa-music"></i><label>music</label></div></NavLink>
            <NavLink to='/' className="navbar_btn__touch_layer" ><div className="navbar_btn navbar_btn__LEFT" ><i class="fas fa-tv"></i><label>videos</label></div></NavLink>
            <NavLink to='/' className="navbar_btn__touch_layer" ><div className="navbar_btn navbar_btn__LEFT" ><i class="fas fa-cog"></i><label>videos</label></div></NavLink>
            </div>
        </div>
      </Router>
      {/* </div> */}
    </div>
  );




  
}




export default App;






{/* <div className="log-buttons"> */}
{/* <select className="navbar__options" type="range">
<option to='/login' value="/login">1</option>
  <option value="2"></option>
  <option value="3"></option>
  <option value="4"></option>
  <option value="5"></option>
  <option value="6"></option>
  <option value="7"></option>
  <option value="8"></option>
  <option value="9"></option>
  <option value="10"></option>
</select> */}
{/* <div className="navbar_btn navbar_btn__LEFT" ><Link to='/login' className="navbar_btn"><i class="fas fa-user-secret"></i><label>login</label></Link></div> */}
{/* <div className="navbar__volume">
  <div className="navbar__volume_down_btn" ><NavLink to='/signup' className="" activeClassName="selectedLink"><i class="fas fa-minus"></i><label>signup</label></NavLink></div>
  <input className="slider" type="range" />
  <div className="navbar__volume_up_btn" ><NavLink to='/' className="" activeClassName="selectedLink"><i class="fas fa-plus"></i><label></label></NavLink></div>
</div> */}
{/* <div className="navbar_btn navbar_btn__LEFT" ><Link to='/users' className="navbar_btn"><i class="fas fa-user-cog"></i><label>user</label></Link></div>
<div className="navbar_btn navbar_btn__LEFT" ><Link to='/' className="navbar_btn nav"><i class="fas fa-users-cog"></i><label></label></Link></div> */}