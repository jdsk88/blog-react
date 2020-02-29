import React from 'react';
import axios from 'axios';

class MyForm extends React.Component {
  state = {
    atitle: '',
    asubtite: '',
    abody: '',
    file: null
  }
  atitleChange = event => {  this.setState({ atitle: event.target.value});
console.log(this.state.atitle)}
  asubtitleChange = event => {    this.setState({ asubtitle: event.target.value});
console.log(this.state.asubtite)}
  abodyChange = event => {  this.setState({ fname: event.target.value});
console.log(this.state.abody)}
  afileChange = event => {  
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

    axios.post(`http://192.168.0.193:3000/articles`, // post request to json server 
    { 
      title: this.state.atitle,
      subtitle: this.state.asubtite,
      body: this.state.abody,
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
              <p>Title:</p>
              <p>Subtitle:</p>
              <p>Body:</p>
              <p>File:</p>
           </div>
            <div className="form__inputs">
              <input type="text" name="atitle" onChange={this.atitleChange} />
              <input type="text" name="asubtitle" onChange={this.asubtitleChange} />
              <input type="text" name="abody" onChange={this.abodyChange} />
            </div>
          <div className="buttons">
              <input type="file" name="file" onChange={this.afileChange} />
            <button type="submit" onClick={this.onClickHandler}>SEND FORM</button>
            </div>
        </form>
      </div>
      </div>
    )
  }
}
export default MyForm