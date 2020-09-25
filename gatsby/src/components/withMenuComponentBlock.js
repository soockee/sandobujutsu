import React from 'react';

/**
 * HOC for menu on the top
 */
export const withMenuComponentBlock = ({ id, Component }) => () => (
  <div id={id} className='block'>
    {/* Indent for menu for not overlaping with title of the block */}
    <div className='empty-space'></div>
    <Component />
  </div>
)