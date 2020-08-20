import React from 'react';
import { withMenuComponentBlock } from './withMenuComponentBlock';

export const InfoBlock = withMenuComponentBlock({
  id: 'info',
  Component: () => <div className='info-column'>
     <div className='has-text-left-desktop has-text-centered-mobile is-size-3-desktop is-size-5-touch'>
      Wir sind die Kampfkunst-Abteilung der <span className='brand-turbo-underline'>TSG Reiskirchen</span>.
      Unter der Leitung von Till Kemper wird ein Training des Jiu Jitsu, das traditionellen Nihon Ju Jutsu,
      sowie Okinawa Goju Ryu Karate mit leidenschaft angeboten.
    </div>
  </div>,
});
