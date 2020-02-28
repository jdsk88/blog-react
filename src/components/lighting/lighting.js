import React from 'react';
import "../../style/lighting.css";
import { BrowserRouter as Router, Switch, Route, NavLink, Link } from 'react-router-dom';



class Lighting extends React.Component{
  
    render() {
      return (
        <div class="power">

        <Router> <div className="overflow">
        
                <div class="power-container">
                <div className="power__options_container">
                  <NavLink to='/signin' className="power__options_flex" ><div className="power__options"><i class="fas fa-lightbulb"></i><label>zone 1</label></div></NavLink>
                  <NavLink to='/signup' className="power__options_flex" ><div className="power__options"><i class="fas fa-lightbulb"></i><label>zone 2</label></div></NavLink>
                  <NavLink to='/users' className="power__options_flex" ><div className="power__options"><i class="fas fa-lightbulb"></i><label>zone 3</label></div></NavLink>
                  <NavLink to='/settings' className="power__options_flex" ><div className="power__options"><i class="fas fa-lightbulb"></i><label>zone 4</label></div></NavLink>
                </div>
                </div>
                </div>
                <Switch>
                      {/* <Route  path='/articles' component={ArticlesList} /> */}
                      {/* <Route exactly path='/users' component={UsersList} />
                      <Route exactly path='/signin' component={LoginPage} />
                      <Route exactly path='/signup' component={AddUserForm} /> */}
        </Switch>
        </Router>
        
                </div>
      );
    }
  }
  
export default Lighting