import React from 'react';
import { withMenuComponentBlock } from './withMenuComponentBlock';

const renderTitle = title => <div className='client-title brand-turbo-underline'>{title}</div>;

const renderContent = ({ background, title, textLines }) =>
  <div className='column is-size-4-widescreen is-size-5-desktop is-size-6-touch is-size-7-small-mobile'>
    <div className='number-background'>{background}</div>
    <div className='client-content'>
      {renderTitle(title)}
      <ul className='client-text'>{textLines.map((textLine, id) => <li key={id}>{textLine}</li>)}</ul>
    </div>
  </div>;

const renderClientLeftBlock = ({ background, title, textLines }) => <div className='columns'>
  <div className='column is-2 is-hidden-desktop' />
  <div className='column is-1 is-hidden-touch' />
  {renderContent({ background, title, textLines })}
  <div className='column is-6 is-hidden-touch' />
  <div className='column is-2 is-hidden-desktop' />
</div>;

const renderClientRightBlock = ({ background, title, textLines }) => <div className='columns'>
  <div className='column is-2 is-hidden-desktop' />
  <div className='column is-7 is-hidden-touch' />
  {renderContent({ background, title, textLines })}
  <div className='column is-1 is-hidden-touch' />
  <div className='column is-2 is-hidden-desktop' />
</div>;

export const ClientsBlock = withMenuComponentBlock({
  id: 'clients',
  Component: () => {
    return <>
      {renderClientLeftBlock({
        background: '01',
        title: 'Lorem Ipsum',
        textLines: [
          `Lorem Ipsum`,
          `Lorem Ipsum`,
          `Lorem Ipsum`,
          `Lorem Ipsum`,
          `Lorem Ipsum`,
          `Lorem Ipsum`,
        ]
      })}
      {renderClientRightBlock({
        background: '02',
        title: 'Lorem Ipsum',
        textLines: [
          `Lorem Ipsum`,
          `Lorem Ipsum`,
          `Lorem Ipsum`,
          `Lorem Ipsum`,
        ]
      })}
    </>
  },
});
