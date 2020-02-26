import { ProgressSlider, VolumeSlider } from 'react-media-slider';
 
 
render() {
  // Get HTMLAudioElement
  const { audio } = this.state;
  return (
    <ProgressSlider media={audio} />
    <VolumeSlider media={audio} />
  }
}