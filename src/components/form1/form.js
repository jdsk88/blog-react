import React from 'react';
import axios from 'axios';

class MyForm extends React.Component {
  state = {
    uname: '',
    pwd: '',
    fname: '',
    lname: '',
    email: '',
    file: null
  }
  unameChange = event => {  this.setState({ uname: event.target.value});
console.log(this.state.uname)}
  pwdChange = event => {    this.setState({ pwd: event.target.value});
console.log(this.state.pwd)}
  fnameChange = event => {  this.setState({ fname: event.target.value});
console.log(this.state.fname)}
  lnameChange = event => {  this.setState({ lname: event.target.value});
console.log(this.state.lname)}
  emailChange = event => {  this.setState({ email: event.target.value});
console.log(this.state.email)}
  fileChange = event => {  
      this.setState({ file: event.target.files[0], loaded: 0});
      const data = new FormData() 
      data.append('file', this.state.selectedFile)
    console.log(event.target.files[0])
    console.log(this.state.selectedFile)
    }
    
    onClickHandler = () => {
        
    }
 

  handleSubmit = event => {

    event.preventDefault(); //prevent refresh after submit

    axios.post(`http://192.168.0.193:3000/users`, // post request to json server 
    { 
    user_name: this.state.uname,
      password: this.state.pwd,
      first_name: this.state.fname,
      last_name: this.state.lname,
      email: this.state.email,
      file: "/pic.png"
     })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <div class="form__container">
        <form onSubmit={this.handleSubmit}>
           <div className="form__titles">
              <p>User Name:</p>
              <p>Password:</p>
              <p>First Name:</p>
              <p>Last Name:</p>
              <p>Email:</p>
              <p>File:</p>
           </div>
            <div className="form__inputs">
              <input type="text" name="uname" onChange={this.unameChange} />
              <input type="text" name="pwd" onChange={this.pwdChange} />
              <input type="text" name="fname" onChange={this.fnameChange} />
              <input type="text" name="lname" onChange={this.lnameChange} />
              <input type="text" name="email" onChange={this.emailChange} />
            </div>
          <div className="buttons">
              <input type="file" name="file" onChange={this.fileChange} />
            <button type="submit" onClick={this.onClickHandler}>SEND FORM</button>
            </div>
        </form>
      </div>
      </div>
    )
  }
}
export default MyForm