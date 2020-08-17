import React from 'react';
import { withMenuComponentBlock } from './withMenuComponentBlock';

export const StartBlock = withMenuComponentBlock({
  id: 'about',
  Component: () => <>
    <div className='columns'>
      <div className='column is-7' />
      <div className='column is-4 has-text-centered is-size-3-desktop is-size-4-touch'>
        <div className='brand-name brand-name-900'>Sando Bu Jutsu</div>
        <div className='brand-name brand-name-400'>Die Samurai-Schule der Drei Wege</div>
      </div>
      <div className='column is-1' />
    </div>
    <div className='columns'>
      <div className='column is-1' />
      <div className='brand-name column is-4 has-text-left-desktop has-text-centered-mobile is-size-3-desktop is-size-4-touch'>
        <span className='brand-turbo-underline'>Lerne</span>
        <span className='brand-name-300'> die Kampfkünste der Samurai und ihre moderne Anwendung</span>
      </div>
      <div className='column is-7' />
    </div>
  </>,
});