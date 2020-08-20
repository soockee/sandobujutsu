import React from 'react';
import { withMenuComponentBlock } from './withMenuComponentBlock';

export const HoursBlock = withMenuComponentBlock({
  id: 'hours',
  Component: () => <div className='info-column'>
     <div className='has-text-left-desktop has-text-centered-mobile is-size-3-desktop is-size-5-touch'>
      <span className='brand-turbo-underline'>Trainingszeiten</span> sind Montags von 20:00 bis 22:00 Kirschbergschule Reiskirchen
      und Mittwochs von 20:00 bis 22:00 Großsporthalle Reiskirchen
    </div>
  </div>,
});
