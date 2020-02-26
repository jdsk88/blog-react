import React from 'react';
import axios from 'axios';
import "../../style/AddUserForm.css"

export default class AddUserForm extends React.Component {
  state = {
    users: '',
  }

  handleChange = event => {
    this.setState({ users: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.users
    };

    axios.post(`http://localhost:3000/users`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
       <div class="container">
      <form class="user-add-form">
        <div class="form-header">SIGN UP!</div>
        <input class="input" id="uname" type="text" placeholder="User Name" />
        <input
          class="input"
          id="passwd"
          type="password"
          placeholder="Password"
        />
        <input
          class="input"
          id="passwdValid"
          type="password"
          placeholder="Password validation"
        />
        <input
          class="input"
          id="fname"
          type="text"
          placeholder="First Name"
        />
        <input class="input" id="lname" type="text" placeholder="Last Name" />
        <input class="input" id="email" type="email" placeholder="e-mail" />
        <input class="input" id="tel" type="tel" placeholder="Phone number" />
        <label class="form-header" for="sort">Choose default view</label>
        <select class="form-header" id="select" name="sort">
          <option value="oldest">Oldest posts</option>
          <option value="latest">Latest posts</option>
        </select>
        <button class="btn btn-sm btn-success" type="submit">
          register user
        </button>
      </form>
      <div class="validation"></div>
    </div>

      </div>
    )
  }
}
