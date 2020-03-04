import React from 'react';
import axios from 'axios';
import api_url from '../../config';

class AddArticle extends React.Component {
  state = {
    atitle: '',
    asubtite: '',
    abody: '',
    afile: null
  }
  atitleChange = event => {  this.setState({ atitle: event.target.value});
console.log(this.state.atitle)}
  asubtitleChange = event => {    this.setState({ asubtitle: event.target.value});
console.log(this.state.asubtite)}
  abodyChange = event => {  this.setState({ abody: event.target.value});
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

    axios.post(api_url+'/articles', // post request to json server 
    { 
      title: this.state.atitle,
      subtitle: this.state.asubtitle,
      body: this.state.abody,
      file: "/canada.jpg"
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
              <input type="text" name="atitle" onChange={this.atitleChange} />
              <p>Subtitle:</p>
              <input type="text" name="asubtitle" onChange={this.asubtitleChange} />
              <p>Body:</p>
              <input type="text" name="abody" onChange={this.abodyChange} />
              <p>File:</p>
              <input type="file" name="afile" onChange={this.afileChange} />
            </div>
          <div className="buttons">
            <button type="submit" onClick={this.onClickHandler}>SEND FORM</button>
            </div>
        </form>
      </div>
      </div>
    )
  }
}
export default AddArticle