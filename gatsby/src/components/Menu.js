import * as cs from 'classnames';
import React, { useState } from 'react';

export function Menu() {
  const [isExpanded, setIsExpanded] = useState(false);
  const onToggle = () => setIsExpanded(!isExpanded);
  const onClose = () => setIsExpanded(false);

  return (
    <nav className='navbar is-fixed-top' role='navigation' aria-label='main navigation'>
    
      <div id='navbar' className={cs('navbar-menu', 'has-text-centered', {
        'is-active': isExpanded,
      })}>
        <div className='navbar-start'>
          <a className='navbar-item' href='#info' onClick={onClose}>
            <span className='navbar-brand-item'>Über Uns</span>
          </a>

          <a className='navbar-item' href='#hours' onClick={onClose}>
            <span className='navbar-brand-item'>Trainingszeiten</span>
          </a>

          <a className='navbar-item' href='#clients' onClick={onClose}>
            <span className='navbar-brand-item'>Wissenswertes</span>
          </a>

          <a className='navbar-item' href='#contacts' onClick={onClose}>
            <span className='navbar-brand-item'>Kontakt</span>
          </a>
        </div>
      </div>
    </nav>
  )
}
