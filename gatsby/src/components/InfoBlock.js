import React from 'react';
import { withMenuComponentBlock } from './withMenuComponentBlock';

export const InfoBlock = withMenuComponentBlock({
  id: 'info',
  Component: () => <div className='info-column'>
    {/* <div className='has-text-left-desktop has-text-centered-mobile is-size-3-desktop is-size-5-touch'>
      Мы молодое <span className='brand-turbo-underline'>спортивное маркетинговое агентство</span>.
      Мы уверены, что спортсмен может делиться не только
      своими достижениями, но и <span className='brand-turbo-underline'>образом жизни</span>.
      Начинающие спортсмены хотят во всем подражать своим кумирам,
      мы хотим помочь им узнать больше о <span className='brand-turbo-underline'>своих героях</span>.
    </div> */}
     <div className='has-text-left-desktop has-text-centered-mobile is-size-3-desktop is-size-5-touch'>
      Wir sind die Kampfkunst-Abteilung der <span className='brand-turbo-underline'>TSG Reiskirchen</span>.
      Unter der Leitung von Till Kemper wird ein Training des Jiu Jitsu, das traditionellen Nihon Ju Jutsu,
      sowie Okinawa Goju Ryu Karate mit leidenschaft angeboten. <br></br>
      <span className='brand-turbo-underline'>Trainingszeiten</span> sind Montags von 20:00 bis 22:00 Kirschbergschule Reiskirchen
      und Mittwochs von 20:00 bis 22:00 Großsporthalle Reiskirchen
    </div>
  </div>,
});
