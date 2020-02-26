import React, { Component } from 'react'
import ReactVideoPlayer from 'react-vp'
 
class Video extends Component {
  render () {
    return <ReactVideoPlayer 
              className={'video-container'}
              mobileClassName={'video-container-mobile'}
              videoPath='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
              videoThumbnail='assets/videos/thumbnail.png'
            //   isMobile={this.props.config.isMobile}
              colors={{
                audioThumb: 'rgb(0, 125, 255)',
                audioSlider: '#ccc',
                videoThumb: 'rgb(0, 125, 255)',
                seekbarPlayed: 'rgb(0, 125, 255)',
                seekbarProgress: '#ccc',
                seekbarBackground: 'rgb(58, 61, 80)'
              }}
              />
  }
}
export default Video