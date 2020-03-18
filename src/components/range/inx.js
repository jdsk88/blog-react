import React, { Component, useEffect, useState } from "react";
import { fetchLights } from "./../../services/light_services";
import SliderVertical from "./range";
// import {domainUrl} from './../../constants/types';
import { useFetch } from "./useFetch";

const Light = props => {
  const { data, loading } = useFetch("http://localhost:3000/lights");
  const [value, setValue] = useState(30);
  console.log('data',data);
  const handleChange = value => {
    setValue(value);
  };

  return (
    <div className="container">
      <div className="slider orientation-reversed">
        <div className="light__slider-wrap">
        {data && data.map(light => <SliderVertical key={light.id} light={light} /> )}
          </div>
      </div>
    </div>
  );
};

export default Light;

// class Volume extends Component {
//   constructor (props, context) {
//     super(props, context)
//     this.state = {
//       value: 25,
//       reverseValue: 8
//     }
//   }

//   handleChange = (value) => {
//     this.setState({
//       value: value
//     })
//   }

// //   handleChangeReverse = (value) => {
// //     this.setState({
// //       reverseValue: value
// //     })
// //   }

//   render () {
//     const { value, reverseValue } = this.state
//     return (

//       <div className='slider orientation-reversed'>
//         <div className='slider-group'>

//           <div className='slider-vertical'>
//             <Slider
//               min={0}
//               max={100}
//               value={value}
//               orientation='vertical'
//               onChange={this.handleChange}
//             />
//             <div className='value'>{value}</div>
//           </div>

// {/*
//           <div className='slider-horizontal'>
//             <Slider
//               min={0}
//               max={100}
//               value={reverseValue}
//               orientation='horizontal'
//               onChange={this.handleChangeReverse}
//             />
//             <div className='value'>{reverseValue}</div>
//           </div> */}

//         </div>
//       </div>
//     )
//   }
// }
