import React from 'react'
import karate_img from '../images/karate-4.png'


class InfoBlockImg extends React.Component{
  render(){
    return  <div>
      <img src={karate_img} alt="karate_img" />
    </div>
  }
}
class InfoBlockContent extends React.Component{
  render(){
    return  <div className='info-column'>
      <div className='has-text-left-desktop has-text-centered-mobile is-size-3-desktop is-size-5-touch'>
        Wir sind die Kampfkunst-Abteilung der <span className='brand-turbo-underline'>TSG Reiskirchen</span>.
        Unter der Leitung von Till Kemper trainieren wir Jiu Jitsu, Nihon Ju Jutsu, Okinawa Goju Ryu Karate, sowie Jung Do Mu Sul Kupso Sul.
      </div>
    </div>
  }
}

export function InfoBlock(){
  return <div id='info' className='block'>
    <div className='empty-space'></div>
    <InfoBlockContent />
    <InfoBlockImg />
  </div>
}