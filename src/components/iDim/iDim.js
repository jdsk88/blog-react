import React from 'react';
import api_url from '../../config'
import axios from 'axios'
import '../../style/iSwitch.css'
import Volume from '../../components/range/range'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/Rangeslider'



class IDim extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {isActive: false};
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            devices: []
            };
            this.state = {
              value: 0
            }
       
        }

  componentDidMount() {
    axios.get(api_url + `/devices?type=dimmer`)
      .then(res => {
        const devices = res.data;
        console.log('devices mounted')
        this.setState({
          devices
        });
      });
  }
  handleClick(event) { 
    const currentEl = event.target;
    const ip = currentEl.dataset.ip;  
 
    this.setState(state => ({
      isActive: !state.isActive
    }));
    if (this.state.isActive){
        axios.get(`${ip}/led/0`)
          console.log('Off')
      } else {
          axios.get(`${ip}/led/1`)
          console.log('On')
      }
      console.log(currentEl) 
  }

    
  // handleChange = (value) => {
  //   this.setState({
  //     value: value
  //   })
  //   console.log('vertical slider: ' + value)
  //   axios.get(api_url+`/devices/0?state=${value}`)
  // }

  render() {
    const { value } = this.state
    return (
      <div className="iSwitch">
          <h1>iSter wireless devices list</h1>
<table className="table">
    <thead>
    <th>ID</th>
    <th>Type</th>
    <th>IP</th>
    <th>control</th>
    </thead>
    <tbody>
        {this.state.devices.map(device => 
            <tr>
            <td>{device.id}</td>
            <td>{device.type}</td>
            <td>{device.ip}</td>
            <td>
            {/* <Slider
        min={0}
        max={100}
        value={value}
        orientation="horizontal"
        onChange={this.handleChange}
      /> */}
            {/* <button data-ip={device.ip} className={this.state.isActive ? 'toggleActive' : 'toggleNotActive' }  onClick={this.handleClick}>{this.state.isActive ? 'ON' : 'OFF'}
</button> */}
</td>
            </tr>
            )}
    </tbody>
</table>

    </div>










    );
  }
}

export default IDim