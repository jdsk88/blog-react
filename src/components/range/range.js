import React, { Component } from 'react'
import Slider from 'react-rangeslider'
import axios from 'axios'
import api_url from '../../../src/config'
import 'react-rangeslider/lib/Rangeslider'


class Volume extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      value: 0,
      reverseValue: 0
    }
  }


  
  handleChange = (value) => {
    this.setState({
      value: value
    })
    console.log('vertical slider: ' + value)
    axios.get(api_url+`/devices/0?state=${value}`)
  }
  
  render () {
    const { value } = this.state
    return (<>

<Slider
        min={0}
        max={100}
        value={value}
        orientation="horizontal"
        onChange={this.handleChange}
      />
      {/* <div className='rangeslider'>
        <div className='rangeslider-group'>

          <div className='slider-vertical'>
            <Slider
              min={0}
              max={100}
              value={value}
              orientation='vertical'
              onChange={this.handleChange}
              />
            <div className='value'>{value}</div>
          </div> */}

          {/* <div className='rangeslider-horizontal'>
            <Slider
            min={0}
            max={100}
            value={value}
            orientation='horizontal'
            onChange={this.handleChange}
            />
            <div className='value'>{value}</div>
          </div>  */}

       
        {/* </div> 
      </div> */}
          </>
    )
  }
}

export default Volume;
