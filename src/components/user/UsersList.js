import React from 'react';
import axios from 'axios';
// import { BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
// import AddUserForm from '../add_user_form/AddUserForm';
// import LoginPage from '../login/login';
// import AddArticle from '../add_article/add_article';
import api_url from '../../config'
import "../../style/users.css"
import "../../../node_modules/bootstrap/dist/css/bootstrap.css"

class UsersList extends React.Component {
  state = {
    users: []
  };
  componentDidMount() {
    axios.get(api_url + `/users`)
      .then(res => {
        const users = res.data;
        this.setState({
          users
        });
      });
  }
  render() {
    return (
    <div className="users-container">
      <div className="users-box">
{/* <Router><div className="overflow">
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
      <Route exactly path='/signup' component={AddUserForm} /> 
      <Route exactly path='/signup' component={AddUserForm} />
</Switch>
</Router> */}
        <div className="user-data">
        <table class="table">
    <thead>
      <tr>
        <th>ID</th>
        {/* <th>Username</th> */}
        {/* <th>PASSWORD</th> */}
        <th>Firstname</th>
        <th>Lastname</th>
        {/* <th>Email</th> */}
      </tr>
    </thead>
    <tbody>
    {this.state.users.map(user => 
        <tr>
        <td>{user.id}</td>
        {/* <td>{user.user_name} </td> */}
        {/* <td>{user.password}</td> */}
        <td>{user.first_name} </td>
        <td>{user.last_name}</td>
        {/* <td>{user.email}</td> */}
      </tr>
      )}
    </tbody>
  </table>
        </div>
      </div>
      {/* )} */}
    </div>);
  }
}

export default UsersList





// {user.user_name} 
// {user.password} 
// {user.first_name} 
// {user.last_name} 
// {user.email} 
// {user.id} 
// {user.file}
// {user.age}
// {user.gender}
// {user.eyeColor}
// {user.picture}
// {user.company}
// {user.email}
// {user.phone}
// {user.address}
// {user.about}
// {user.balance}
// {user.registred}
// {user.tags}
// {user.greeting}{user.favoriteFruit}
// {user.index}
// {user.api_key}