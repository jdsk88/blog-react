import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink, Link } from 'react-router-dom';
import "../../style/power.css";
// import Navbar from '../navbar/navbar';
import AddUserForm from '../add_user_form/AddUserForm';
import MyForm from '../form1/form';
import LoginPage from '../login/login';
import UsersList from '../user/UsersList';
import AddArticle from '../add_article/add_article';
// import ArticlesList from '../article/ArticlesList';

console.log("power page loaded")

class Power extends React.Component{
// constructor(){
//  const pwrBtn = document.querySelector('header-nav__power-btn');
// }
    render() {
      return ( 
        <div class="power">

<Router> <div className="overflow">

        <div class="power-container">
        <div className="power__options_container">
          <NavLink to='/add-article' className="power__options_flex" ><div className="power__options"><i class="fas fa-user"></i><label>sign in</label></div></NavLink>
          <NavLink to='/signup' className="power__options_flex" ><div className="power__options"><i class="fas fa-user-plus"></i><label>sign up</label></div></NavLink>
          <NavLink to='/users' className="power__options_flex" ><div className="power__options"><i class="fas fa-database"></i><label>database</label></div></NavLink>
          <NavLink to='/settings' className="power__options_flex" ><div className="power__options"><i class="fas fa-cog"></i><label>settings</label></div></NavLink>
        </div>
        </div>
        </div>
        <Switch>
              <Route  path='/add-article' component={AddArticle} />
              <Route exactly path='/users' component={UsersList} />
              <Route exactly path='/signin' component={LoginPage} />
              {/* <Route exactly path='/signup' component={AddUserForm} /> */}
              <Route exactly path='/signup' component={MyForm} />
</Switch>
</Router>

        </div>
      )}}

export default Power

