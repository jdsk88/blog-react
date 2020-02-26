import React from 'react';
import axios from 'axios';
import "../../style/users.css"
class UsersList extends React.Component {
  state = {
    users: []
  };
  componentDidMount() {
    axios.get(`http://localhost:3000/users`)
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
      {this.state.users.map(user =>       
      <div className="users-box">
        <div className="user-data">
          <div className="user-data__first-name"> FIRST NAME: {user.first_name} </div>
          <div className="user-data__last-name"> LAST NAME: {user.last_name} </div>
          <div className="user-data__age"> AGE: {user.age} </div>
          <div className="user-data__gender"> GENDER: {user.gender} </div>
          <div className="user-data__eye_color"> EYE COLOR: {user.eyeColor} </div>
          <div className="user-data__picture"> PICTURE: {user.picture} </div>
          <div className="user-data__company"> COMPANY: {user.company} </div>
          <div className="user-data__email"> EMAIL: {user.email} </div>
          <div className="user-data__phone"> PHONE: {user.phone} </div>
          <div className="user-data__address"> ADDRESS: {user.address} </div>
          <div className="user-data__about"> ABOUT: {user.about} </div>
          <div className="user-data__balance"> BALANCE: {user.balance} </div>
          <div className="user-data__email"> EMAIL: {user.email} </div>
          <div className="user-data__registration-date"> REGISTRATION DATE: {user.registred} </div>
          <div className="user-data__tags"> TAGS: {user.tags} </div>
          <div className="user-data__greetings"> {user.greeting} </div>
          <div className="user-data__fruit"> I LIKE: {user.favoriteFruit} </div>
          <div className="user-data__index"> INDEX: {user.index} </div>
          <div className="user-data__user-id"> USER ID: {user._id} </div>
          <div className="user-data__last-name"> API_KEY: {user.api_key} </div>
        </div>
      </div>
      )}
    </div>);
  }
}

export default UsersList