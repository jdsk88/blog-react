import React from 'react';
import api_url from '../../config'
import axios from 'axios'
import '../../style/iSwitch.css'


class ISwtich4 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isActive: false};
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            devices: []
            };
        }
       

  componentDidMount() {
    axios.get(api_url + `/devices?type=switch-4`)
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
        axios.get(`${ip}/s/a/0`)
          console.log('Off')
        //   console.log(currentEl) 
      } else {
          axios.get(`${ip}/s/a/1`)
          console.log('On')
        //   console.log(currentEl) 
      }
      console.log(currentEl) 
  }

  render() {
    return (
      <div className="iSwitch">
          <h1>iSter wireless devices list</h1>
            {/* {this.state.devices.map(device => 
            <div className="iSwitch_module">
            <h1>iSter iSwtich</h1>
            <h3>{device.ip}</h3>
            <h3>{device.id}</h3>
            <h3>{device.type}</h3>
            <button onClick={() => axios.get(`${device.ip}/led/1`)}>ON</button>
            <button onClick={() => axios.get(`${device.ip}/led/0`)}>OFF</button>
<button data-ip={device.ip} className={this.state.isActive ? 'toggleActive' : 'toggleNotActive' }  onClick={this.handleClick}>
{this.state.isActive ? 'ON' : 'OFF'}
</button>
</div>
)} */}


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
            <button onClick={() => axios.get(`${device.ip}/s/1/1`)}>ON</button>
            <button onClick={() => axios.get(`${device.ip}/s/1/0`)}>OFF</button>
            <button onClick={() => axios.get(`${device.ip}/s/2/1`)}>ON</button>
            <button onClick={() => axios.get(`${device.ip}/s/2/0`)}>OFF</button>
            <button onClick={() => axios.get(`${device.ip}/s/3/1`)}>ON</button>
            <button onClick={() => axios.get(`${device.ip}/s/3/0`)}>OFF</button>
            <button onClick={() => axios.get(`${device.ip}/s/4/1`)}>ON</button>
            <button onClick={() => axios.get(`${device.ip}/s/4/0`)}>OFF</button>
            <button data-ip={device.ip} className={this.state.isActive ? 'toggleActive' : 'toggleNotActive' }  onClick={this.handleClick}>{this.state.isActive ? 'ON' : 'OFF'}
</button>
</td>
            </tr>
            )}
    </tbody>
</table>

    </div>










    );
  }
}

export default ISwtich4