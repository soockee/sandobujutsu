import React from 'react';
import { Helmet } from 'react-helmet';
import { ClientsBlock } from '../components/ClientsBlock';
import { ContactsBlock } from '../components/ContactsBlock';
import { InfoBlock } from '../components/InfoBlock';
import { Menu } from '../components/Menu';
import { StartBlock } from '../components/StartBlock';
import '../styles/index.scss';

function Index() {
  return (
    <main>
      <Helmet>
        {/* web and mail */}
        <meta name='yandex-verification' content='9446566f608a8694' />
        {/* web master */}
        <meta name='yandex-verification' content='7617eb4c080fd9ce' />
        <title>Sando Bujutsu</title>
      </Helmet>
      <Menu />
      <StartBlock />
      <InfoBlock />
      <HoursBlock />
      <ClientsBlock />
      <ContactsBlock />
    </main>
  );
}

export default Index;
