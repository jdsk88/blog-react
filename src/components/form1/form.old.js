import React from 'react';
import ReactDOM from 'react-dom';
// import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
// import {InputGroup, Form, FormControl} from '../../../node_modules/react-bootstrap/cjs/InputGroup.js'
// import {InputGroup, Form, FormControl} from 'react-bootstrap';

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input01: '1' };
    this.state = { input02: '2' };
    this.state = { input03: '3' };
    this.state = { input04: '4' };
    this.state = { input05: '5' };
  }
  inputField01 = (event) => {
    this.setState({input01: event.target.value});
    console.log(this.state.input01);

  }
  inputField02 = (event) => {
    this.setState({input02: event.target.value});
    console.log(this.state.input02);

  }
  inputField03 = (event) => {
    this.setState({input03: event.target.value});
    console.log(this.state.input03);

  }
  inputField04 = (event) => {
    this.setState({input04: event.target.value});
    console.log(this.state.input04);

  }
  inputField05 = (event) => {
    this.setState({input05: event.target.value});
    console.log(this.state.input05);

  }

  sendForm = (event) => {
        event.preventDefault();
        this.insertCustomer();

    }
            
            

  insertCustomer() {
    const time = new Date();
    fetch("http://192.168.0.193:3000/users", {
      headers: { "Content-Type": "application/json; charset=utf-8" },
      method: "POST",
      body: JSON.stringify({
        user_name: `${this.state.input01}`,
        password: `${this.state.input02}`,
        first_name: `${this.state.input03}`,
        last_name: `${this.state.input04}`,
        e_mail: `${this.state.input05}`,
        // tel: `${this.phone.value}`,
        dateJoin: `${time}`,
        // default_view: `${this.select.value}`
      })
    });
    console.log(`
     insertCustomer() user add post-request
    ----------------------------------------
    |--------------COMPLETE----------------|
    ----------------------------------------
      User name    :   ${this.state.input01}
    ----------------------------------------
      Password     :   ${this.state.input02}  
    ----------------------------------------
      First name   :   ${this.state.input03}
    ----------------------------------------
      Last name    :   ${this.state.input04}
    ----------------------------------------
      e-mail       :   ${this.state.input05}   
    ----------------------------------------
 
    `);
  }
  
  render() {
    return (
    <div>
    <div class="form__container">
    <form onSubmit={this.sendForm}>
        <div class="form__titles">
        <p>input01</p>
        <p>input02</p>
        <p>input03</p>
        <p>input04</p>
        <p>input05</p>
        <p>options</p>
        </div>
        <div class="form__inputs">
        <input type='text' onChange={this.inputField01}/>
        <input type='text' onChange={this.inputField02}/>
        <input type='text' onChange={this.inputField03}/>
        <input type='text' onChange={this.inputField04}/>
        <input type='text' onChange={this.inputField05}/>
        <select name="" id="">
            <options value='option01' >option01</options>
            <options value='option02' >option02</options>
            <options value='option03' >option03</options>
            <options value='option04' >option04</options>
            <options value='option05' >option05</options>
        </select>
     <button type='submit'>submit</button>
        </div>
        
    </form>
</div>















    </div>




    );
  }
}

export default MyForm




// onChange={this.optionField01}
// onChange={this.optionField02}
// onChange={this.optionField03}
// onChange={this.optionField04}
// onChange={this.optionField05}