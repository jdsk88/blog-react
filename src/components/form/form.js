import React from 'react';
import "../../style/form.css";

console.log('form connected')

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        wybieraSie: true,
        liczbaGosci: 2
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
      const target = event.target;
      const value = target.type === "checkbox" ? target.checked : target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }
  
    render() {
      return (
        <form>
          <label>
            Wybiera się:
            <input
              name="wybieraSie"
              type="checkbox"
              checked={this.state.wybieraSie}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Liczba gości:
            <input
              name="liczbaGosci"
              type="number"
              value={this.state.liczbaGosci}
              onChange={this.handleInputChange} />
          </label>
        </form>
      );
    }
  }

  export default Form