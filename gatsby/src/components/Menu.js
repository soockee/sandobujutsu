import * as cs from 'classnames';
import React, { useState } from 'react';
import citrusLogo from '../images/citrus-logo.png';

export function Menu() {
  const [isExpanded, setIsExpanded] = useState(false);
  const onToggle = () => setIsExpanded(!isExpanded);
  const onClose = () => setIsExpanded(false);

  return (
    <nav className='navbar is-fixed-top' role='navigation' aria-label='main navigation'>
      {/* <div className='navbar-brand'>
        <a
          aria-label='Return to the top of the website'
          className={cs('navbar-item', 'is-hidden-desktop', 'navbar-logo-link')}
          href='#about'
          role='button'
          type='button'
        >
          <img alt='Citrus logo' src={citrusLogo} width='112' height='28' />
        </a>
        <a
          aria-label='Return to the top of the website'
          className={cs('navbar-item', 'link-button', 'is-hidden-touch')}
          href='#about'
          role='button'
          type='button'
        >
          <img alt='Citrus logo' src={citrusLogo} width='112' height='28' />
        </a>

        <a
          aria-expanded={isExpanded}
          aria-label='menu'
          className={cs('navbar-burger', 'burger', {
            'is-active': isExpanded,
          })}
          data-target='navbar'
          onClick={onToggle}
          role='button'
          type='button'
        >
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </a>
      </div> */}

      <div id='navbar' className={cs('navbar-menu', 'has-text-centered', {
        'is-active': isExpanded,
      })}>
        <div className='navbar-start'>
          <a className='navbar-item' href='#info' onClick={onClose}>
            <span className='navbar-brand-item'>Über Uns</span>
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
