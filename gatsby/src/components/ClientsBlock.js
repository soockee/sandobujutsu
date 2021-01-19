import React from 'react';
import { withMenuComponentBlock } from './withMenuComponentBlock';

const renderTitle = title => <div className='client-title brand-turbo-underline'>{title}</div>;

const renderContent = ({ background1, title1, textLines1 }) =>
  <div className='column is-size-4-widescreen is-size-5-desktop is-size-6-touch is-full-mobile'>
    <div className='number-background'>{background1}</div>
    <div className='client-content'>
      {renderTitle(title1)}
      <ul className='client-text'>{textLines1.map((textLine, id) => <li key={id}>{textLine}</li>)}</ul>
    </div>
  </div>;

const renderContent2 = ({ background2, title2, textLines2 }) =>
<div className='column is-size-4-widescreen is-size-5-desktop is-size-6-touch is-half-mobile'>
  <div className='number-background'>{background2}</div>
  <div className='client-content'>
    {renderTitle(title2)}
    <ul className='client-text'>{textLines2.map((textLine, id) => <li key={id}>{textLine}</li>)}</ul>
  </div>
</div>;

const renderContent3 = ({ background3, title3, textLines3 }) =>
<div className='column is-size-4-widescreen is-size-5-desktop is-size-6-touch is-half-mobile'>
  <div className='number-background'>{background3}</div>
  <div className='client-content'>
    {renderTitle(title3)}
    <ul className='client-text'>{textLines3.map((textLine, id) => <li key={id}>{textLine}</li>)}</ul>
  </div>
</div>;

const renderClientLeftBlock = ({ background1, title1, textLines1 }) => <div className='columns'>
  <div className='column is-1 is-hidden-touch' />
  <div className='column is-1 is-hidden-desktop' />
  {renderContent({ background1, title1, textLines1 })}

</div>;

const renderClientRightBlock = ({ background3, title3, textLines3, background2, title2, textLines2 }) => <div className='columns'>
  {renderContent3({ background3, title3, textLines3 })}
  <div className='column is-2 is-hidden-touch' />
  {renderContent2({ background2, title2, textLines2 })}
</div>;

export const ClientsBlock = withMenuComponentBlock({
  id: 'clients',
  Component: () => {
    return <>
      {renderClientLeftBlock({
        background1: '01',
        title1: 'Nihon Ju Jutsu',
        textLines1: [
          `Kampftechniken der Samurai`,
          `Mit und ohne Waffen`,
          `Stand- und Bodenkampf`,
          `International Budo Associaton`,
          `International Sui-Getsu-Juku Association`,
        ]
      })}
      {renderClientRightBlock({
        background3: '02',
        title3: 'Okinawa Goju Ryu Karate',
        textLines3: [
          `Traditionelle Kampfkunst Okinawas`,
          `Nahkampforientiert`,
          `Kata- und Partnerübungen`,
          `Tritt-, Schlag-, Hebel-, Wurf- und Würgetechniken`,
          `International Goju Ryu Federation`,
        ],
        background2: '03',
        title2: 'Jung Do Mu Sul Kupso Sul',
        textLines2: [
          `Nervendruck- und Vitalpunkte`,
          `Jung Do Mu Sul Kupso Sul Ryu`,
        ]
      })}
    </>
  },
});
