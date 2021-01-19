import React from 'react';
import { withMenuComponentBlock } from './withMenuComponentBlock';
import karate_img from '../images/karate-2.png'



class HoursBlockImg extends React.Component{
  render(){
    return  <div>
      <img src={karate_img} alt="karate_img" />;
    </div>
  }
}
class HoursBlockContent extends React.Component{
  render(){
    return  <div className='hours-column'>
      <div className='has-text-left-desktop has-text-centered-mobile is-size-3-desktop is-size-5-touch'>
        <span className='brand-turbo-underline'>Trainingszeiten</span> sind Montags von 20:00 bis 22:00 <a style={{color: "#4f8df1"}} href="https://www.google.de/maps/place/Kirschbergschule/@50.5917976,8.8227627,17z/data=!3m1!4b1!4m5!3m4!1s0x47bcf15681c57c31:0x3f82212dbd40b6bc!8m2!3d50.5917942!4d8.8249514">Kirschbergschule Reiskirchen </a>
        und Mittwochs von 20:00 bis 22:00  <a style={{color: "#4f8df1"}} href="https://www.google.de/maps/place/Sporthalle/@50.595155,8.8367112,17z/data=!3m1!4b1!4m5!3m4!1s0x47bcf3e22fff7661:0x3340487984fb9d4f!8m2!3d50.5951516!4d8.8388999">Sporthalle Reiskirchen </a>
      </div>
    </div>
  }
}

export function HoursBlock(){
  return (<div id='hours' className='block'>
    <div className='empty-space'></div>
    <HoursBlockImg />
    <HoursBlockContent />
  </div>);
}